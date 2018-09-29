// @flow
import type { $AxiosError } from "axios";
import type { Socket } from "socket.io-client";
import type { Store, Dispatch, RequestBody, CreateApiUrlOptions } from "@types";

import { push } from "react-router-redux";
import io from "socket.io-client";

import {
  requestStart,
  requestEnd,
  addId,
  removeId,
  clearFirstName,
  clearLastName,
  clearMailAddress
} from "@actions";
import request from "@modules/request";
import createApiUrl from "@modules/createApiUrl";
import {
  TOP_PATH,
  PURPOSE_PATH,
  REGISTER_SCAN_PATH,
  REGISTER_REGISTRATION_IN_PATH,
  REGISTER_SUCCESS_PATH,
  REGISTER_FAILURE_PATH,
  COMPLETION_EXIT_PATH,
  ERROR_BAD_REQUEST_PATH,
  ERROR_INTERNAL_SERVER_ERROR_PAHT,
  API_GET_USER_STATE,
  API_POST_REGISTER,
  API_POST_EXIT
} from "@constants";

/**
 * @class
 */
class SocketProvider {
  socket: Socket;
  store: Store;

  /**
   * @constructor
   * @param {string} url 接続先のURL
   */
  constructor(url: string, store: Store) {
    this.socket = io(url);
    this.store = store;
  }

  addEventListener(): void {
    this.socket.on("disconnect", () => {
      this.socket.open();
    });
    this.socket.on("scan", this.scan.bind(this));
  }

  scan(id: string): void {
    if (!this.canExecuteScan(id)) return;

    this.socket.emit("sound", id);
    this.store.dispatch(addId(id));

    const { pathname } = window.location;
    if (pathname === TOP_PATH) {
      this.getUserState();
    } else if (pathname === REGISTER_SCAN_PATH) {
      this.postUser();
    }
  }

  /**
   * ユーザーの状態を取得
   */
  async getUserState(): Promise<void> {
    const { id } = this.store.getState();
    const { method, path, substr } = API_GET_USER_STATE;
    const options: CreateApiUrlOptions = { substr, newstr: id };
    const url: string = createApiUrl(path, options);

    try {
      this.store.dispatch(push(requestStart()));
      const res = await request({ url, method });
      this.store.dispatch(push(requestEnd()));

      if (!res.data || !res.data.user) {
        // データエラー
        this.store.dispatch(removeId());
        this.store.dispatch(push(ERROR_BAD_REQUEST_PATH));
      } else if (res.data.user.isEntry) {
        // 退出
        await this.postExit();
      } else {
        // 目的選択
        this.store.dispatch(push(PURPOSE_PATH));
      }
    } catch (error) {
      this.store.dispatch(requestEnd());
      this.store.dispatch(removeId());
      this.catchError(error);
    }
  }

  /**
   * 退出リクエスト
   */
  async postExit(): Promise<void> {
    const { id } = this.store.getState();
    const { method, path } = API_POST_EXIT;
    const data = { id };
    const url: string = createApiUrl(path);

    try {
      this.store.dispatch(push(requestStart()));
      await request({ url, method, data });
      this.store.dispatch(push(requestEnd()));

      this.store.dispatch(removeId());
      this.store.dispatch(push(COMPLETION_EXIT_PATH));
    } catch (error) {
      this.store.dispatch(requestEnd());
      this.store.dispatch(removeId());
      this.catchError(error);
    }
  }

  /**
   * ユーザー登録リクエスト
   */
  async postUser(): Promise<void> {
    this.store.dispatch(push(REGISTER_REGISTRATION_IN_PATH));

    const { method, path } = API_POST_REGISTER;
    const url: string = createApiUrl(path);
    const { id, firstName, lastName, mailAddress } = this.store.getState();
    const data = {
      id,
      user: {
        mail: mailAddress,
        name: `${firstName} ${lastName}`
      }
    };

    try {
      this.store.dispatch(requestStart());
      await request({ url, method, data });
      this.store.dispatch(requestEnd());

      this.store.dispatch(push(REGISTER_SUCCESS_PATH));
    } catch (error) {
      this.store.dispatch(requestEnd());
      // TODO: storeの情報が変更が必要かどうか確認
      this.store.dispatch(push(REGISTER_FAILURE_PATH));
    }
    // 初期化
    this.store.dispatch(clearFirstName());
    this.store.dispatch(clearLastName());
    this.store.dispatch(clearMailAddress());
  }

  /**
   * スキャン処理が実行できるか判定
   * @param {any} id スキャンしたid
   */
  canExecuteScan(id: any): boolean {
    if (!/^[0-9a-f]{16}$/.test(id)) return false;

    const { isConnected } = this.store.getState();
    if (isConnected) return false;

    return true;
  }

  /**
   * エラーハンドリング
   */
  catchError(error: $AxiosError<RequestBody>): void {
    const { dispatch }: { dispatch: Dispatch } = this.store;

    if (error.response) {
      switch (error.response.status) {
        case 500:
          dispatch(push(ERROR_INTERNAL_SERVER_ERROR_PAHT));
          break;
        default:
          dispatch(push(ERROR_BAD_REQUEST_PATH));
          break;
      }
    }
  }
}
export default SocketProvider;
