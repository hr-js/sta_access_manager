import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Top from "@components/Top";

describe("Top.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<Top />);
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const top = shallow(<Top />);

    it("cssクラス: topをもつ", () => {
      expect(top.hasClass("top")).toBeTruthy();
    });

    it("子要素としてdivを2つもつ", () => {
      expect(top.children()).toHaveLength(2);
    });

    describe("1つ目の子要素", () => {
      it("「カードをスキャンして下さい」と表示される", () => {
        expect(top.childAt(0).text()).toBe("カードをスキャンして下さい");
      });
    });

    describe("2つ目の子要素", () => {
      it("「Created by hr-js」と表示される", () => {
        expect(top.childAt(1).text()).toBe("Created by hr-js");
      });

      it("cssクラス: labelをもつ", () => {
        expect(top.childAt(1).hasClass("label")).toBeTruthy();
      });
    });
  });
});
