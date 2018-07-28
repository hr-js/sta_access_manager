import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import SingleButton from "@components/SingleButton";

describe("SingleButton.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<SingleButton text="Single Button" />);
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const onClick = jest.fn();
    const defaultButton = shallow(
      <SingleButton text="Single Button" onButtonClick={onClick} />
    );
    const button = defaultButton.find("button");
    it("cssクラス: singleButtonをもつ", () => {
      expect(defaultButton.hasClass("singleButton")).toBeTruthy();
    });

    it("button要素はcssクラス: defaultをもつ", () => {
      expect(button.hasClass("default")).toBeTruthy();
    });

    it("textに渡した文字列が表示される", () => {
      expect(button.text("Single Button")).toBeTruthy();
    });

    it("クリックすると、onButtonClickに渡した関数が実行される", () => {
      button.simulate("click");
      expect(onClick).toBeCalled();
    });

    describe("classNameにnextと指定した時", () => {
      it("button要素はcssクラス: nextをもつ", () => {
        const nextButton = shallow(<SingleButton className="next" />);
        expect(nextButton.find("button").hasClass("next")).toBeTruthy();
      });
    });
  });
});
