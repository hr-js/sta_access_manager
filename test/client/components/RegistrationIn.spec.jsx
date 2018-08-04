import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import RegistrationIn from "@components/Register/RegistrationIn";

describe("RegistrationIn.jsxのテスト", () => {
  describe("スナッップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<RegistrationIn />);
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const registrationIn = shallow(<RegistrationIn />);
    const div = registrationIn.childAt(0);

    it("cssクラス: mainをもつ", () => {
      expect(registrationIn.hasClass("main")).toBeTruthy();
    });

    it("子要素divはcssクラス: content, registrationInをもつ", () => {
      expect(div.name()).toBe("div");
      expect(div.hasClass("content")).toBeTruthy();
      expect(div.hasClass("content")).toBeTruthy();
    });

    it("登録中と表示される", () => {
      expect(registrationIn.text()).toBe("登録中");
    });
  });
});
