import io from "socket.io-client";
import SocketProvider from "@modules/SocketProvider";
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
  ERROR_INTERNAL_SERVER_ERROR_PAHT
} from "@constants";

jest.mock("socket.io-client");
jest.mock("../../../src/client/modules/request", () => jest.fn());
jest.mock("../../../src/client/modules/createApiUrl", () => jest.fn());

// mock作成
const socketMock = {};
const onMock = jest.fn();
const openMock = jest.fn();
const emitMock = jest.fn();
socketMock.on = onMock;
socketMock.open = openMock;
socketMock.emit = emitMock;

io.mockReturnValue(socketMock);

const storeMock = {};
const dispatchMock = jest.fn();
const getStateMock = jest.fn().mockReturnValue({
  id: "1234567890",
  firstName: "firstName",
  lastName: "lastName",
  mailAddress: "test",
  isConnected: false
});
storeMock.dispatch = dispatchMock;
storeMock.getState = getStateMock;

createApiUrl.mockReturnValue("http://test.exsample.com/hoge");

describe("modules/SocketProvider.jsのテスト", () => {
  let socketProvider;

  beforeAll(() => {
    socketProvider = new SocketProvider("https://exsample.com", storeMock);
  });

  describe("constructor", () => {
    it("io()を実行する", () => {
      expect(io.mock.calls[0][0]).toBe("https://exsample.com");
    });

    it("インスタンスを生成する", () => {
      expect(socketProvider.socket).toBe(socketMock);
      expect(socketProvider.store).toBe(storeMock);
    });
  });

  describe("addEventListener", () => {
    afterAll(() => {
      onMock.mockClear();
    });

    it("socket.on()が2回実行される", () => {
      socketProvider.addEventListener();

      const [first, second] = onMock.mock.calls;

      expect(onMock).toBeCalledTimes(2);
      expect(first[0]).toBe("disconnect");
      expect(typeof first[1]).toBe("function");
      expect(second[0]).toBe("scan");
      expect(typeof second[1]).toBe("function");
    });
  });

  describe("scan", () => {
    let canExecuteScanSpy;
    let getUserStateSpy;
    let postUserSpy;

    beforeAll(() => {
      canExecuteScanSpy = jest
        .spyOn(SocketProvider.prototype, "canExecuteScan")
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(true)
        .mockRejectedValue(false);
      getUserStateSpy = jest
        .spyOn(SocketProvider.prototype, "getUserState")
        .mockImplementation(() => {});
      postUserSpy = jest
        .spyOn(SocketProvider.prototype, "postUser")
        .mockImplementation(() => {});

      window.history.replaceState({}, "top", TOP_PATH);

      socketProvider.scan("id");
    });

    afterAll(() => {
      emitMock.mockClear();
      dispatchMock.mockClear();

      canExecuteScanSpy.mockRestore();
      getUserStateSpy.mockRestore();
      postUserSpy.mockRestore();
    });

    it("canExecuteScanを実行する", () => {
      expect(canExecuteScanSpy).toBeCalledWith("id");
    });

    it("socket.emitを実行する", () => {
      expect(emitMock).toBeCalledWith("sound", "id");
    });

    it("Id追加Actionをdispatchする", () => {
      expect(dispatchMock).toBeCalledWith({ id: "id", type: "ADD_ID" });
    });

    it("現在のPATHがTOP_PATHの時、ユーザーステータスを取得する", () => {
      expect(getUserStateSpy).toBeCalled();
      expect(postUserSpy).not.toBeCalled();
    });

    it("現在のPATHがREGISTER_SCAN_PATHの時、ユーザー登録を行う", () => {
      getUserStateSpy.mockClear();
      postUserSpy.mockClear();

      window.history.replaceState({}, "REGISTER_SCAN", REGISTER_SCAN_PATH);

      socketProvider.scan("id");

      expect(getUserStateSpy).not.toBeCalled();
      expect(postUserSpy).toBeCalled();
    });

    it("現在のPATHが、上記2つ以外の時、何もしない", () => {
      getUserStateSpy.mockClear();
      postUserSpy.mockClear();

      window.history.replaceState({}, "TEST", "/test");

      socketProvider.scan("id");

      expect(getUserStateSpy).not.toBeCalled();
      expect(postUserSpy).not.toBeCalled();
    });
  });

  describe("getUserState", () => {
    let postExitSpy;
    let catchErrorSpy;

    beforeAll(async () => {
      request
        // 入室していない時
        .mockReturnValueOnce(
          new Promise(resolve =>
            resolve({
              data: {
                user: { isEntry: false }
              }
            })
          )
        )
        // 入室している時
        .mockReturnValueOnce(
          new Promise(resolve =>
            resolve({
              data: {
                user: { isEntry: true }
              }
            })
          )
        )
        // Bad Response その1
        .mockReturnValueOnce(new Promise(resolve => resolve({})))
        // Bad Response その2
        .mockReturnValueOnce(
          new Promise(resolve =>
            resolve({
              data: {}
            })
          )
        )
        // Error
        .mockReturnValueOnce(new Promise((_, reject) => reject("error")));

      postExitSpy = jest
        .spyOn(SocketProvider.prototype, "postExit")
        .mockImplementation(() => {});
      catchErrorSpy = jest
        .spyOn(SocketProvider.prototype, "catchError")
        .mockImplementation(() => {});

      await socketProvider.getUserState();
    });

    afterAll(() => {
      getStateMock.mockClear();
      dispatchMock.mockClear();
      createApiUrl.mockClear();

      request.mockClear();
      request.mockReset();

      postExitSpy.mockRestore();
      catchErrorSpy.mockRestore();
    });

    it("store.getStateを実行する", () => {
      expect(getStateMock).toBeCalled();
    });

    it("createApiUrlを実行する", () => {
      const [[path, options]] = createApiUrl.mock.calls;
      expect(path).toBe("/user/:id/status");
      expect(options).toEqual({
        newstr: "1234567890",
        substr: ":id"
      });
    });

    it("ユーザーのステータスを取得するリクエストを送る", () => {
      const [[first], [second]] = dispatchMock.mock.calls;
      expect(first).toEqual({ type: "REQUEST_START" });
      expect(second).toEqual({ type: "REQUEST_END" });
      expect(request).toBeCalledWith({
        url: "http://test.exsample.com/hoge",
        method: "get"
      });
    });

    it("取得したユーザーが入室していない時、「目的選択画面」に遷移する", () => {
      const [, , [third]] = dispatchMock.mock.calls;
      expect(third.payload.args[0]).toBe(PURPOSE_PATH);
    });

    it("取得したユーザーが入室してた時、退出処理を実行する", async () => {
      postExitSpy.mockClear();

      await socketProvider.getUserState();

      expect(postExitSpy).toBeCalled();
    });

    it("取得したユーザーデータが不正の場合、「BAD REQUEST画面」に遷移する", async () => {
      dispatchMock.mockClear();

      await socketProvider.getUserState();

      let [, , [third], [fourth]] = dispatchMock.mock.calls;

      expect(third).toEqual({ type: "REMOVE_ID" });
      expect(fourth.payload.args[0]).toBe(ERROR_BAD_REQUEST_PATH);

      dispatchMock.mockClear();
      await socketProvider.getUserState();

      [, , [third], [fourth]] = dispatchMock.mock.calls;

      expect(third).toEqual({ type: "REMOVE_ID" });
      expect(fourth.payload.args[0]).toBe(ERROR_BAD_REQUEST_PATH);
    });

    it("リクエストでエラーが発生した時、エラー処理を行う", async () => {
      dispatchMock.mockClear();

      await socketProvider.getUserState();

      const [, [second], [third]] = dispatchMock.mock.calls;

      expect(second).toEqual({ type: "REQUEST_END" });
      expect(third).toEqual({ type: "REMOVE_ID" });
      expect(catchErrorSpy).toBeCalledWith("error");
    });
  });

  describe("postExit", () => {
    let catchErrorSpy;

    beforeAll(async () => {
      request
        .mockReturnValueOnce(new Promise(resolve => resolve()))
        .mockReturnValueOnce(new Promise((_, reject) => reject("error")));

      catchErrorSpy = jest
        .spyOn(SocketProvider.prototype, "catchError")
        .mockImplementation(() => {});

      await socketProvider.postExit();
    });

    afterAll(() => {
      getStateMock.mockClear();
      dispatchMock.mockClear();
      createApiUrl.mockClear();

      request.mockClear();
      request.mockReset();

      catchErrorSpy.mockRestore();
    });

    it("store.getStateを実行する", () => {
      expect(getStateMock).toBeCalled();
    });

    it("createApiUrlを実行する", () => {
      const [[path]] = createApiUrl.mock.calls;
      expect(path).toBe("/exit");
    });

    it("退出リクエストを送る", () => {
      const [[first], [second]] = dispatchMock.mock.calls;

      expect(first).toEqual({ type: "REQUEST_START" });
      expect(request).toBeCalledWith({
        data: { id: "1234567890" },
        url: "http://test.exsample.com/hoge",
        method: "post"
      });
      expect(second).toEqual({ type: "REQUEST_END" });
    });

    it("正常に処理ができたら、「退出完了画面」に遷移する", () => {
      const [, , [third], [fourth]] = dispatchMock.mock.calls;
      expect(third).toEqual({ type: "REMOVE_ID" });
      expect(fourth.payload.args[0]).toBe(COMPLETION_EXIT_PATH);
    });

    it("リクエストでエラーが発生した時、エラー処理を行う", async () => {
      dispatchMock.mockClear();

      await socketProvider.postExit();

      const [, [second], [third]] = dispatchMock.mock.calls;

      expect(second).toEqual({ type: "REQUEST_END" });
      expect(third).toEqual({ type: "REMOVE_ID" });
      expect(catchErrorSpy).toBeCalledWith("error");
    });
  });

  describe("postUser", () => {
    beforeAll(async () => {
      process.env.MAIL_DOMAIN = "example.com";

      request
        .mockReturnValueOnce(new Promise(resolve => resolve()))
        .mockReturnValueOnce(new Promise((_, reject) => reject()));

      await socketProvider.postUser();
    });

    afterAll(() => {
      dispatchMock.mockClear();
      createApiUrl.mockClear();
      getStateMock.mockClear();

      request.mockClear();
      request.mockReset();
    });

    it("「登録中画面」に遷移する", () => {
      const [[first]] = dispatchMock.mock.calls;
      expect(first.payload.args[0]).toBe(REGISTER_REGISTRATION_IN_PATH);
    });

    it("createApiUrlを実行する", () => {
      const [[path]] = createApiUrl.mock.calls;
      expect(path).toBe("/register");
    });

    it("store.getStateを実行する", () => {
      expect(getStateMock).toBeCalled();
    });

    it("ユーザーを登録するリクエストを送る", () => {
      const [, [second], [third]] = dispatchMock.mock.calls;
      expect(second).toEqual({ type: "REQUEST_START" });
      expect(request.mock.calls[0][0]).toEqual({
        url: "http://test.exsample.com/hoge",
        method: "post",
        data: {
          id: "1234567890",
          user: {
            mail: "test@example.com",
            name: "lastName firstName"
          }
        }
      });
      expect(third).toEqual({ type: "REQUEST_END" });
    });

    it("ユーザー登録できたら、「登録完了画面」に遷移する", () => {
      const fourth = dispatchMock.mock.calls[3][0];
      expect(fourth.payload.args[0]).toBe(REGISTER_SUCCESS_PATH);
    });

    it("リクエストが終了したら、登録時に入力した情報を初期化する", () => {
      const [, , , , [fifth], [sixth], [seventh]] = dispatchMock.mock.calls;
      expect(fifth).toEqual({ type: "CLEAR_FIRST_NAME" });
      expect(sixth).toEqual({ type: "CLEAR_LAST_NAME" });
      expect(seventh).toEqual({ type: "CLEAR_MAIL_ADDRESS" });
    });

    it("ユーザー登録に失敗したら、「登録失敗画面」に遷移する", async () => {
      dispatchMock.mockClear();

      await socketProvider.postUser();

      const [
        ,
        ,
        [third],
        [fourth],
        [fifth],
        [sixth],
        [seventh]
      ] = dispatchMock.mock.calls;

      expect(third).toEqual({ type: "REQUEST_END" });
      expect(fourth.payload.args[0]).toBe(REGISTER_FAILURE_PATH);
      expect(fifth).toEqual({ type: "CLEAR_FIRST_NAME" });
      expect(sixth).toEqual({ type: "CLEAR_LAST_NAME" });
      expect(seventh).toEqual({ type: "CLEAR_MAIL_ADDRESS" });
    });
  });

  describe("canExecuteScan", () => {
    it("16文字の[0-9a-f]でない時、falseを返す", () => {
      expect(socketProvider.canExecuteScan("123456789abcdef")).toBeFalsy();
      expect(socketProvider.canExecuteScan("123456789abcdefg")).toBeFalsy();
      expect(socketProvider.canExecuteScan()).toBeFalsy();
    });

    it("アプリが通信中でない時、trueを返す", () => {
      expect(socketProvider.canExecuteScan("0123456789abcdef")).toBeTruthy();
    });

    it("アプリが通信中の時、falseを返す", () => {
      getStateMock.mockReturnValue({ isConnected: true });
      expect(socketProvider.canExecuteScan("0123456789abcdef")).toBeFalsy();
    });
  });

  describe("catchError", () => {
    it("ステータスコードが500の時、「INTERNAL　SERVER　ERROR画面」に遷移する", () => {
      socketProvider.catchError({ response: { status: 500 } });
      const [[first]] = dispatchMock.mock.calls;
      expect(first.payload.args[0]).toBe(ERROR_INTERNAL_SERVER_ERROR_PAHT);
    });

    it("ステータスコードが500以外の時、「BAD REQUEST画面」に遷移する", () => {
      dispatchMock.mockClear();
      socketProvider.catchError({ response: { status: 400 } });
      const [[first]] = dispatchMock.mock.calls;
      expect(first.payload.args[0]).toBe(ERROR_BAD_REQUEST_PATH);
    });
  });
});
