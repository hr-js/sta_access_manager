import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import MainFlame from "@components/MainFlame";

describe("MainFlame.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<MainFlame>children</MainFlame>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("子要素が表示されている", () => {
      // 文字の時
      expect(
        shallow(<MainFlame>children</MainFlame>)
          .find(".main")
          .text()
      ).toBe("children");
      // JSXの時
      expect(
        shallow(
          <MainFlame>
            <div>children</div>
          </MainFlame>
        )
          .find(".main")
          .contains(<div>children</div>)
      ).toBeTruthy();
    });

    it("typeにworkを指定した時、main要素はcssクラス: workを持つ", () => {
      const flame = shallow(<MainFlame type="work">test</MainFlame>);
      expect(flame.find("main").hasClass("work")).toBeTruthy();
    });

    it("typeにstudyを指定した時、main要素はcssクラス: studyを持つ", () => {
      const flame = shallow(<MainFlame type="study">test</MainFlame>);
      expect(flame.find("main").hasClass("study")).toBeTruthy();
    });

    it("typeにmeetUpを指定した時、main要素はcssクラス: meetUpを持つ", () => {
      const flame = shallow(<MainFlame type="meetUp">test</MainFlame>);
      expect(flame.find("main").hasClass("meetUp")).toBeTruthy();
    });

    it("typeにcircleを指定した時、main要素はcssクラス: circleを持つ", () => {
      const flame = shallow(<MainFlame type="circle">test</MainFlame>);
      expect(flame.find("main").hasClass("circle")).toBeTruthy();
    });

    it("typeにexitを指定した時、main要素はcssクラス: exitを持つ", () => {
      const flame = shallow(<MainFlame type="exit">test</MainFlame>);
      expect(flame.find("main").hasClass("exit")).toBeTruthy();
    });

    it("typeにerrorを指定した時、main要素はcssクラス: errorを持つ", () => {
      const flame = shallow(<MainFlame type="error">test</MainFlame>);
      expect(flame.find("main").hasClass("error")).toBeTruthy();
    });

    it("typeに上記以外を指定した時、main要素はcssクラス: standardを持つ", () => {
      const flame = shallow(<MainFlame type="test">test</MainFlame>);
      expect(flame.find("main").hasClass("standard")).toBeTruthy();
    });

    it("typeに値を指定しない時、main要素はcssクラス: standardを持つ", () => {
      const flame = shallow(<MainFlame>test</MainFlame>);
      expect(flame.find("main").hasClass("standard")).toBeTruthy();
    });
  });
});
