import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Menu from "@components/Menu";

describe("Menu.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer
        .create(<Menu current="入退室処理" onButtonClick={() => {}} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("button要素を3つもつ", () => {
      const buttons = shallow(<Menu />).find("button");
      expect(buttons).toHaveLength(3);
      expect(buttons.at(0).text()).toBe("入退室処理");
      expect(buttons.at(1).text()).toBe("ユーザ登録");
      expect(buttons.at(2).text()).toBe("利用者一覧");
    });

    it("currentに「入退室処理」を指定した時、「入退室処理」ボタンはcssクラス: selectedを持つ", () => {
      const buttons = shallow(<Menu current="入退室処理" />).find("button");
      expect(buttons.at(0).hasClass("selected")).toBeTruthy();
      expect(buttons.at(1).hasClass("selected")).toBeFalsy();
      expect(buttons.at(2).hasClass("selected")).toBeFalsy();
    });

    it("currentに「ユーザ登録」を指定した時、「ユーザ登録」ボタンはcssクラス: selectedを持つ", () => {
      const buttons = shallow(<Menu current="ユーザ登録" />).find("button");
      expect(buttons.at(0).hasClass("selected")).toBeFalsy();
      expect(buttons.at(1).hasClass("selected")).toBeTruthy();
      expect(buttons.at(2).hasClass("selected")).toBeFalsy();
    });

    it("currentに「利用者一覧」を指定した時、「利用者一覧」ボタンにcssクラス: selectedを持つ", () => {
      const buttons = shallow(<Menu current="利用者一覧" />).find("button");
      expect(buttons.at(0).hasClass("selected")).toBeFalsy();
      expect(buttons.at(1).hasClass("selected")).toBeFalsy();
      expect(buttons.at(2).hasClass("selected")).toBeTruthy();
    });

    it("currentに何も指定しない時、どのボタンもcssクラス: selectedを持たない", () => {
      const buttons = shallow(<Menu current="" />).find("button");
      expect(buttons.at(0).hasClass("selected")).toBeFalsy();
      expect(buttons.at(1).hasClass("selected")).toBeFalsy();
      expect(buttons.at(2).hasClass("selected")).toBeFalsy();
    });

    describe("buttonをクリック時", () => {
      const onButtonClick = jest.fn();
      let menu;

      beforeEach(() => {
        menu = shallow(<Menu onButtonClick={onButtonClick} />);
        onButtonClick.mockReset();
      });

      it("「入退室処理」をクリックした時、引数に'入退室処理'が渡される", () => {
        menu
          .find("button")
          .at(0)
          .simulate("click");
        expect(onButtonClick.mock.calls[0][0]).toBe("入退室処理");
      });

      it("「ユーザ登録」をクリックした時、引数に'ユーザ登録'が渡される", () => {
        menu
          .find("button")
          .at(1)
          .simulate("click");
        expect(onButtonClick.mock.calls[0][0]).toBe("ユーザ登録");
      });

      it("「利用者一覧」をクリックした時、引数に'利用者一覧'が渡される", () => {
        menu
          .find("button")
          .at(2)
          .simulate("click");
        expect(onButtonClick.mock.calls[0][0]).toBe("利用者一覧");
      });
    });
  });
});
