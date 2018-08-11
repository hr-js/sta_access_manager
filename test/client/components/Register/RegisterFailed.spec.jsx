import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import RegisterFailed from "@components/Register/RegisterFailed";

describe("RegisterFailed.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<RegisterFailed onBackButton={() => {}} />);
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const onButton = () => {};
    const scan = shallow(<RegisterFailed onBackButton={onButton} />);

    it("cssクラス: mainをもつ", () => {
      expect(scan.hasClass("main")).toBeTruthy();
    });

    it("子要素のdivは、cssクラス: contentWithButtonとtextOnlyをもつ", () => {
      expect(
        scan
          .children()
          .find("div")
          .hasClass("contentWithButton")
      ).toBeTruthy();
      expect(
        scan
          .children()
          .find("div")
          .hasClass("textOnly")
      ).toBeTruthy();
    });

    it("「登録に失敗しました」と表示されている", () => {
      expect(
        scan
          .children()
          .find("div")
          .text()
      ).toBe("登録に失敗しました");
    });

    it("子要素のSingleButtonに、値を渡している", () => {
      expect(scan.find("SingleButton").prop("text")).toBe("入力画面に戻る");
      expect(scan.find("SingleButton").prop("className")).toBe("default");
      expect(scan.find("SingleButton").prop("onButtonClick")).toBe(onButton);
    });

    describe("SingleButtonをクリックした時", () => {
      it("onCancelButtonに渡した関数が呼び出される", () => {
        const mock = jest.fn();
        const fullDom = mount(<RegisterFailed onBackButton={mock} />);
        fullDom.find("SingleButton button").simulate("click");
        expect(mock).toBeCalled();
      });
    });
  });
});
