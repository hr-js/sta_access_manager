import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import RegisterScan from "@components/Register/RegisterScan";

describe("RegisterScan.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<RegisterScan onCancelButton={() => {}} />);
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const onButton = () => {};
    const scan = shallow(<RegisterScan onCancelButton={onButton} />);

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

    it("子要素のSingleButtonに、値を渡している", () => {
      expect(scan.find("SingleButton").prop("text")).toBe("キャンセル");
      expect(scan.find("SingleButton").prop("onButtonClick")).toBe(onButton);
    });

    describe("SingleButtonをクリックした時", () => {
      it("onCancelButtonに渡した関数が呼び出される", () => {
        const mock = jest.fn();
        const fullDom = mount(<RegisterScan onCancelButton={mock} />);
        fullDom.find("SingleButton button").simulate("click");
        expect(mock).toBeCalled();
      });
    });
  });
});
