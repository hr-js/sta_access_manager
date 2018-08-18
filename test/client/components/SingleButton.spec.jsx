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
    const button = shallow(
      <SingleButton text="Single Button" onButtonClick={onClick} />
    ).find("button");

    it("classNameを指定しない時、button要素はcssクラス: defaultをもつ", () => {
      expect(button.hasClass("default")).toBeTruthy();
    });

    it("classNameにnextと指定した時、button要素はcssクラス: nextをもつ", () => {
      const nextButton = shallow(<SingleButton className="next" />);
      expect(nextButton.find("button").hasClass("next")).toBeTruthy();
    });

    it("textに渡した値が、文表示される", () => {
      expect(button.text("Single Button")).toBeTruthy();
    });

    it("ボタンをクリックすると、onButtonClickに渡した関数が実行される", () => {
      button.simulate("click");
      expect(onClick).toBeCalled();
    });
  });
});
