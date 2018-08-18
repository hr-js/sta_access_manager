import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import RegisterScan from "@components/Register/RegisterScan";

describe("RegisterScan.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<RegisterScan onCancelButton={() => {}} />);
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("SingleButtonのonButtonClickに、onCancelButtonで指定した関数が渡されている", () => {
      const fn = () => {};
      const registerScan = shallow(<RegisterScan onCancelButton={fn} />);
      expect(registerScan.find("SingleButton").prop("onButtonClick")).toBe(fn);
    });
  });
});
