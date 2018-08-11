import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import ListHeader from "@components/Participant/ListHeader";

describe("Participant.ListHeader.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<ListHeader />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const header = shallow(<ListHeader />);
    const children = header.find(".header > div");
    it("cssクラス: headerをもつ", () => {
      expect(header.hasClass("header")).toBeTruthy();
    });

    it("cssクラス: headerをもつdiv要素は、子要素にdiv要素を3つもつ", () => {
      expect(children).toHaveLength(3);
    });

    it("cssクラス: headerをもつdivの1つめの子要素は、項目名が[名前]", () => {
      const child = children.at(0);
      expect(child.hasClass("columnName")).toBeTruthy();
      expect(child.hasClass("border")).toBeTruthy();
      expect(child.text("名前")).toBeTruthy();
    });

    it("cssクラス: headerをもつdivの2つめの子要素は、項目名が[目的]", () => {
      const child = children.at(1);
      expect(child.hasClass("columnPurpose")).toBeTruthy();
      expect(child.hasClass("border")).toBeTruthy();
      expect(child.text("目的")).toBeTruthy();
    });

    it("cssクラス: headerをもつdivの3つめの子要素は、項目名が[入退室]", () => {
      const child = children.at(2);
      expect(child.hasClass("columnStatus")).toBeTruthy();
      expect(child.text("入退室")).toBeTruthy();
    });
  });
});
