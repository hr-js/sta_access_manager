import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import MainFlame from "@components/MainFlame";

// eslint-disable-next-line flowtype/require-return-type
const TestComponent = () => <div>test component</div>;

describe("MainFlame.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer
        .create(
          <MainFlame>
            <TestComponent />
          </MainFlame>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("main要素をもつ", () => {
      const mainFlame = shallow(
        <MainFlame>
          <TestComponent />
        </MainFlame>
      );
      expect(mainFlame.name()).toBe("main");
    });

    it("main要素は、cssクラス: mainFlameをもつ", () => {
      const mainFlame = shallow(
        <MainFlame>
          <TestComponent />
        </MainFlame>
      );
      expect(
        mainFlame
          .find("main")
          .at(0)
          .hasClass("mainFlame")
      ).toBeTruthy();
    });

    it("main要素の子要素は、cssクラス: mainをもつ", () => {
      const mainFlame = shallow(
        <MainFlame>
          <TestComponent />
        </MainFlame>
      );
      expect(mainFlame.children().hasClass("main")).toBeTruthy();
    });

    it("指定したコンポーネントを子コンポーネントとしてもつ", () => {
      const mainFlame = mount(
        <MainFlame>
          <TestComponent />
        </MainFlame>
      );
      expect(mainFlame.contains(TestComponent)).toBeTruthy();
      expect(mainFlame.find("TestComponent").text()).toBe("test component");
    });

    describe("type: workを指定した時", () => {
      it("cssクラス: workをもつ", () => {
        const mainFlame = shallow(
          <MainFlame type="work">
            <TestComponent />
          </MainFlame>
        );
        expect(mainFlame.find("main").hasClass("work")).toBeTruthy();
      });
    });

    describe("type: studyを指定した時", () => {
      it("cssクラス: studyをもつ", () => {
        const mainFlame = shallow(
          <MainFlame type="study">
            <TestComponent />
          </MainFlame>
        );
        expect(mainFlame.find("main").hasClass("study")).toBeTruthy();
      });
    });

    describe("type: meetUpを指定した時", () => {
      it("cssクラス: meetUpをもつ", () => {
        const mainFlame = shallow(
          <MainFlame type="meetUp">
            <TestComponent />
          </MainFlame>
        );
        expect(mainFlame.find("main").hasClass("meetUp")).toBeTruthy();
      });
    });

    describe("type: circleを指定した時", () => {
      it("cssクラス: circleをもつ", () => {
        const mainFlame = shallow(
          <MainFlame type="circle">
            <TestComponent />
          </MainFlame>
        );
        expect(mainFlame.find("main").hasClass("circle")).toBeTruthy();
      });
    });

    describe("type: exitを指定した時", () => {
      it("cssクラス: exitをもつ", () => {
        const mainFlame = shallow(
          <MainFlame type="exit">
            <TestComponent />
          </MainFlame>
        );
        expect(mainFlame.find("main").hasClass("exit")).toBeTruthy();
      });
    });

    describe("type: errorを指定した時", () => {
      it("cssクラス: errorをもつ", () => {
        const mainFlame = shallow(
          <MainFlame type="error">
            <TestComponent />
          </MainFlame>
        );
        expect(mainFlame.find("main").hasClass("error")).toBeTruthy();
      });
    });

    describe("typeに上記以外を指定した時", () => {
      it("cssクラス: standardをもつ", () => {
        const mainFlame = shallow(
          <MainFlame type="standard">
            <TestComponent />
          </MainFlame>
        );
        expect(mainFlame.find("main").hasClass("standard")).toBeTruthy();
      });
    });

    describe("typeを指定しない時", () => {
      it("cssクラス: standardをもつ", () => {
        const mainFlame = shallow(
          <MainFlame type="standard">
            <TestComponent />
          </MainFlame>
        );
        expect(mainFlame.find("main").hasClass("standard")).toBeTruthy();
      });
    });
  });
});
