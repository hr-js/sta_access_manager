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

    it("cssクラス: mainをもつ", () => {
      const mainFlame = shallow(
        <MainFlame>
          <TestComponent />
        </MainFlame>
      );
      expect(
        mainFlame
          .find("main")
          .at(0)
          .hasClass("main")
      ).toBeTruthy();
    });

    it("指定したコンポーネントを子コンポーネントとしてもつ", () => {
      const mainFlame = mount(
        <MainFlame>
          <TestComponent />
        </MainFlame>
      );
      expect(mainFlame.children().text()).toBe("test component");
    });
  });
});
