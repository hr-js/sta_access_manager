// @flow
import mailAddress from "@reducers/mailAddress";

describe("reducers/mailAddress.jsのtest", () => {
  it("初期状態を取得できる", () => {
    const expectedState = "";
    expect(mailAddress(undefined, { type: "@@INIT" })).toBe(expectedState);
  });

  it("type: CHANGE_MAIL_ADDRESSを処理する", () => {
    const expectedState = "mailAddress";
    expect(
      mailAddress("", {
        type: "CHANGE_MAIL_ADDRESS",
        mailAddress: "mailAddress"
      })
    ).toBe(expectedState);
  });

  it("type: CLEAR_MAIL_ADDRESSを処理する", () => {
    const expectedState = "";
    expect(mailAddress("mailAddress", { type: "CLEAR_MAIL_ADDRESS" })).toBe(
      expectedState
    );
  });
});
