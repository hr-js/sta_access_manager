// @flow
import id from "@reducers/id";

describe("reducers/id.jsのtest", () => {
  it("初期状態を取得できる", () => {
    const expectedState = "";
    expect(id(undefined, { type: "@@INIT" })).toBe(expectedState);
  });

  it("type: ADD_IDを処理する", () => {
    const expectedState = "0000000000000000";
    expect(id("", { type: "ADD_ID", id: "0000000000000000" })).toBe(
      expectedState
    );
  });

  it("type: REMOVE_IDを処理する", () => {
    const expectedState = "";
    expect(id("0000000000000000", { type: "REMOVE_ID" })).toBe(expectedState);
  });
});
