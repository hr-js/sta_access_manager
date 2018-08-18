import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import RegisterFailed from "@components/Register/RegisterFailed";

describe("RegisterFailed.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<RegisterFailed onBackButton={() => {}} />);
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("SingleButtonのonButtonClickに、onBackButtonで指定された関数が渡されている", () => {
      const fn = () => {};
      const registerFailed = shallow(<RegisterFailed onBackButton={fn} />);
      expect(registerFailed.find("SingleButton").prop("onButtonClick")).toBe(
        fn
      );
    });
  });
});
