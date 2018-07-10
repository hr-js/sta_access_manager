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
      const menu = shallow(<Menu />);
      const buttons = menu.find("button");
      expect(buttons).toHaveLength(3);
      expect(buttons.at(0).text()).toBe("入退室処理");
      expect(buttons.at(1).text()).toBe("ユーザ登録");
      expect(buttons.at(2).text()).toBe("利用者一覧");
    });

    describe("currentに「入退室処理」を指定する", () => {
      it("「入退室処理」ボタンにcssクラス: selectedをもつ", () => {
        const menu = shallow(<Menu current="入退室処理" />);
        const buttons = menu.find("button");
        expect(buttons.at(0).hasClass("selected")).toBeTruthy();
        expect(buttons.at(1).hasClass("selected")).toBeFalsy();
        expect(buttons.at(2).hasClass("selected")).toBeFalsy();
      });
    });

    describe("currentに「ユーザ登録」を指定する", () => {
      it("「ユーザ登録」ボタンにcssクラス: selectedをもつ", () => {});
      const menu = shallow(<Menu current="ユーザ登録" />);
      const buttons = menu.find("button");
      expect(buttons.at(0).hasClass("selected")).toBeFalsy();
      expect(buttons.at(1).hasClass("selected")).toBeTruthy();
      expect(buttons.at(2).hasClass("selected")).toBeFalsy();
    });

    describe("currentに「利用者一覧」を指定する", () => {
      it("「利用者一覧」ボタンにcssクラス: selectedをもつ", () => {
        const menu = shallow(<Menu current="利用者一覧" />);
        const buttons = menu.find("button");
        expect(buttons.at(0).hasClass("selected")).toBeFalsy();
        expect(buttons.at(1).hasClass("selected")).toBeFalsy();
        expect(buttons.at(2).hasClass("selected")).toBeTruthy();
      });
    });

    describe("currentに何も指定しない", () => {
      it("どのボタンもcssクラス: selectedを持たない", () => {
        const menu = shallow(<Menu current="" />);
        const buttons = menu.find("button");
        expect(buttons.at(0).hasClass("selected")).toBeFalsy();
        expect(buttons.at(1).hasClass("selected")).toBeFalsy();
        expect(buttons.at(2).hasClass("selected")).toBeFalsy();
      });
    });

    describe("buttonをクリック", () => {
      const onButtonClick = jest.fn();
      let menu;
      beforeEach(() => {
        menu = shallow(<Menu onButtonClick={onButtonClick} />);
        onButtonClick.mockReset();
      });

      describe("「入退室処理」をクリックする", () => {
        it("引数に'入退室処理'が渡される", () => {
          menu
            .find("button")
            .at(0)
            .simulate("click");
          expect(onButtonClick.mock.calls[0][0]).toBe("入退室処理");
        });
      });

      describe("「ユーザ登録」をクリックする", () => {
        it("引数に'ユーザ登録'が渡される", () => {
          menu
            .find("button")
            .at(1)
            .simulate("click");
          expect(onButtonClick.mock.calls[0][0]).toBe("ユーザ登録");
        });
      });

      describe("「利用者一覧」をクリックする", () => {
        it("引数に'利用者一覧'が渡される", () => {
          menu
            .find("button")
            .at(2)
            .simulate("click");
          expect(onButtonClick.mock.calls[0][0]).toBe("利用者一覧");
        });
      });
    });
  });
});
