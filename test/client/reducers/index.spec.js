// @flow
import reducer from "@reducers";

describe("reducers/index.jsのtest", () => {
  it("9つのプロパティをもつ", () => {
    const props = [
      "firstName",
      "id",
      "inputValidationResult",
      "isConnected",
      "lastName",
      "mailAddress",
      "participant",
      "registerStep",
      "selectedMenu"
    ];

    props.forEach(prop =>
      expect(Object.prototype.hasOwnProperty.call(reducer, prop))
    );
  });
});
