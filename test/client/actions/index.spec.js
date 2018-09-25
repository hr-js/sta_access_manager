// @flow
import * as actions from "@actions";

describe("actionsのテスト", () => {
  it("リクエスト開始アクションが作成される ", () => {
    const expectedAction = { type: "REQUEST_START" };
    expect(actions.requestStart()).toEqual(expectedAction);
  });

  it("リクエスト終了アクションが作成される", () => {
    const expectedAction = { type: "REQUEST_END" };
    expect(actions.requestEnd()).toEqual(expectedAction);
  });

  it("ID追加アクションが作成される", () => {
    const id = "00000000000000000000";
    const expectedAction = { type: "ADD_ID", id };
    expect(actions.addId(id)).toEqual(expectedAction);
  });

  it("ID削除アクションが作成される", () => {
    const expectedAction = { type: "REMOVE_ID" };
    expect(actions.removeId()).toEqual(expectedAction);
  });

  it("入退室処理選択アクションが作成される", () => {
    const expectedAction = { type: "SELECT_TOP" };
    expect(actions.selectTop()).toEqual(expectedAction);
  });

  it("ユーザ登録選択アクションが作成される", () => {
    const expectedAction = { type: "SELECT_REGISTER" };
    expect(actions.selectRegister()).toEqual(expectedAction);
  });

  it("利用者一覧選択アクションが作成される", () => {
    const expectedAction = { type: "SELECT_PARTICIPANT" };
    expect(actions.selectParticipant()).toEqual(expectedAction);
  });

  it("名の変更アクションが作成される", () => {
    const firstName = "firstName";
    const expectedAction = { type: "CHANGE_FIRST_NAME", firstName };
    expect(actions.changeFirstName(firstName)).toEqual(expectedAction);
  });

  it("名の初期化アクションが作成される", () => {
    const expectedAction = { type: "CLEAR_FIRST_NAME" };
    expect(actions.clearFirstName()).toEqual(expectedAction);
  });

  it("姓の変更アクションが作成される", () => {
    const lastName = "lastName";
    const expectedAction = { type: "CHANGE_LAST_NAME", lastName };
    expect(actions.changeLastName(lastName)).toEqual(expectedAction);
  });

  it("姓の初期化アクションが作成される", () => {
    const expectedAction = { type: "CLEAR_LAST_NAME" };
    expect(actions.clearLastName()).toEqual(expectedAction);
  });

  it("メールアドレスの変更アクションが作成される", () => {
    const mailAddress = "mailAddress";
    const expectedAction = { type: "CHANGE_MAIL_ADDRESS", mailAddress };
    expect(actions.changeMailAddress(mailAddress)).toEqual(expectedAction);
  });

  it("メールアドレスの初期化アクションが作成される", () => {
    const expectedAction = { type: "CLEAR_MAIL_ADDRESS" };
    expect(actions.clearMailAddress()).toEqual(expectedAction);
  });

  it("登録ステップ変更アクションが作成される", () => {
    const registerStep = "registerStep";
    const expectedAction = { type: "CHANGE_REGISTER_STEP", registerStep };
    expect(actions.changeRegisterStep(registerStep)).toEqual(expectedAction);
  });

  it("登録ステップ初期化アクションが作成される", () => {
    const expectedAction = { type: "CLEAR_REGISTER_STEP" };
    expect(actions.clearRegisterStep()).toEqual(expectedAction);
  });

  it("検証結果表示アクションが作成される", () => {
    const expectedAction = { type: "SHOW_INPUT_VALIDATION_RESULT" };
    expect(actions.showInputValidationResult()).toEqual(expectedAction);
  });

  it("検証結果非表示アクションが作成される", () => {
    const expectedAction = { type: "HIDE_INPUT_VALIDATION_RESULT" };
    expect(actions.hideInputValidationResult()).toEqual(expectedAction);
  });

  it("参加者一覧追加アクションが作成される", () => {
    const participant = [
      {
        id: "id",
        user: {
          name: "name",
          isEntry: true,
          purpose: "MEET_UP"
        }
      }
    ];
    const expectedAction = { type: "ADD_PARTICIPANT", participant };
    expect(actions.addParticipant(participant)).toEqual(expectedAction);
  });

  it("参加者一覧削除アクションが作成される", () => {
    const expectedAction = { type: "REMOVE_PARTICIPANT" };
    expect(actions.removeParticipant()).toEqual(expectedAction);
  });
});
