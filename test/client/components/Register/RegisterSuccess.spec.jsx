import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import RegisterSuccess from "@components/Register/RegisterSuccess";

describe("RegisterSuccess.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(
        <RegisterSuccess onEntryButton={() => {}} />
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("SingleButtonのonButtonClickに、onEntryButtonで指定した関数が渡されている", () => {
      const fn = () => {};
      const registerScan = shallow(<RegisterSuccess onEntryButton={fn} />);
      expect(registerScan.find("SingleButton").prop("onButtonClick")).toBe(fn);
    });
  });
});
