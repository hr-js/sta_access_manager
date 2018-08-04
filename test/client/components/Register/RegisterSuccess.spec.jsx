import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
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
    const onButton = () => {};
    const scan = shallow(<RegisterSuccess onEntryButton={onButton} />);

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

    it("「登録しました!!」と表示されている", () => {
      expect(
        scan
          .children()
          .find("div")
          .text()
      ).toBe("登録しました!!");
    });

    it("子要素のSingleButtonに、値を渡している", () => {
      expect(scan.find("SingleButton").prop("text")).toBe("入室する");
      expect(scan.find("SingleButton").prop("className")).toBe("next");
      expect(scan.find("SingleButton").prop("onButtonClick")).toBe(onButton);
    });

    describe("SingleButtonをクリックした時", () => {
      it("onCancelButtonに渡した関数が呼び出される", () => {
        const mock = jest.fn();
        const fullDom = mount(<RegisterSuccess onEntryButton={mock} />);
        fullDom.find("SingleButton button").simulate("click");
        expect(mock).toBeCalled();
      });
    });
  });
});
