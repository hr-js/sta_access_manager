import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Header from "@components/Register/Header";

describe("Register.Header.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<Header />);
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const base = shallow(<Header current="input" />);
    const baseListItems = base.find("li");

    it("ol要素はcssクラス: headerをもつ", () => {
      expect(base.name()).toBe("ol");
      expect(base.hasClass("header")).toBeTruthy();
    });

    it("ol要素はli要素を3つ持つ", () => {
      expect(baseListItems).toHaveLength(3);
    });

    it("li要素の0番目の子要素は、[1. 入力>]と表示される", () => {
      expect(baseListItems.at(0).text()).toBe("1. 入力>");
    });

    it("li要素の1番目の子要素は、[2. 読取>]と表示される", () => {
      expect(baseListItems.at(1).text()).toBe("2. 読取>");
    });

    it("li要素の2番目の子要素は、[3. 完了]と表示される", () => {
      expect(baseListItems.at(2).text()).toBe("3. 完了");
    });

    describe("currentにinputを指定した時", () => {
      const selectedInput = shallow(<Header current="input" />).find("li");

      it("li要素の0番目の子要素は、cssクラス: activeをもつ", () => {
        expect(selectedInput.at(0).hasClass("active")).toBeTruthy();
      });

      it("li要素の1番目の子要素は、cssクラス: disabledをもつ", () => {
        expect(selectedInput.at(1).hasClass("disabled")).toBeTruthy();
      });

      it("li要素の2番目の子要素は、cssクラス: disabledをもつ", () => {
        expect(selectedInput.at(2).hasClass("disabled")).toBeTruthy();
      });
    });

    describe("currentにscanを指定した時", () => {
      const selectedScan = shallow(<Header current="scan" />).find("li");

      it("li要素の0番目の子要素は、クラスをもたない(classNameは、undifined)", () => {
        expect(
          Object.prototype.hasOwnProperty.call(
            selectedScan.at(0).props(),
            "className"
          )
        ).toBeTruthy();
        expect(selectedScan.at(0).props().className).toBeUndefined();
      });

      it("li要素の1番目の子要素は、cssクラス: activeをもつ", () => {
        expect(selectedScan.at(1).hasClass("active")).toBeTruthy();
      });

      it("li要素の2番目の子要素は、cssクラス: disabledをもつ", () => {
        expect(selectedScan.at(2).hasClass("disabled")).toBeTruthy();
      });
    });

    describe("currentにcompletionを指定した時", () => {
      const selectedCompletion = shallow(<Header current="completion" />).find(
        "li"
      );

      it("li要素の0番目の子要素は、クラスをもたない(classNameは、undifined)", () => {
        expect(
          Object.prototype.hasOwnProperty.call(
            selectedCompletion.at(0).props(),
            "className"
          )
        ).toBeTruthy();
        expect(selectedCompletion.at(0).props().className).toBeUndefined();
      });

      it("li要素の1番目の子要素は、クラスをもたない(classNameは、undifined)", () => {
        expect(
          Object.prototype.hasOwnProperty.call(
            selectedCompletion.at(1).props(),
            "className"
          )
        ).toBeTruthy();
        expect(selectedCompletion.at(1).props().className).toBeUndefined();
      });

      it("li要素の2番目の子要素は、cssクラス: activeをもつ", () => {
        expect(selectedCompletion.at(2).hasClass("active")).toBeTruthy();
      });
    });

    describe("currentに値を指定しなかった時", () => {
      const selectedCompletion = shallow(<Header />).find("li");

      it("li要素の0番目の子要素は、クラスをもたない(classNameは、undifined)", () => {
        expect(
          Object.prototype.hasOwnProperty.call(
            selectedCompletion.at(0).props(),
            "className"
          )
        ).toBeTruthy();
        expect(selectedCompletion.at(0).props().className).toBeUndefined();
      });

      it("li要素の1番目の子要素は、クラスをもたない(classNameは、undifined)", () => {
        expect(
          Object.prototype.hasOwnProperty.call(
            selectedCompletion.at(1).props(),
            "className"
          )
        ).toBeTruthy();
        expect(selectedCompletion.at(1).props().className).toBeUndefined();
      });

      it("li要素の2番目の子要素は、クラスをもたない(classNameは、undifined)", () => {
        expect(
          Object.prototype.hasOwnProperty.call(
            selectedCompletion.at(2).props(),
            "className"
          )
        ).toBeTruthy();
        expect(selectedCompletion.at(2).props().className).toBeUndefined();
      });
    });
  });
});
