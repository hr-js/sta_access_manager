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
    describe("currentにinputを指定した時", () => {
      const selectedInput = shallow(<Header current="input" />).find("li");

      it("li要素の0番目の子要素は、cssクラス: activeを持つ", () => {
        expect(selectedInput.at(0).hasClass("active")).toBeTruthy();
      });

      it("li要素の1番目の子要素は、cssクラス: disabledを持つ", () => {
        expect(selectedInput.at(1).hasClass("disabled")).toBeTruthy();
      });

      it("li要素の2番目の子要素は、cssクラス: disabledを持つ", () => {
        expect(selectedInput.at(2).hasClass("disabled")).toBeTruthy();
      });
    });

    describe("currentにscanを指定した時", () => {
      const selectedScan = shallow(<Header current="scan" />).find("li");

      it("li要素の0番目の子要素は、クラスを持たない(classNameは、undifined)", () => {
        expect(selectedScan.at(0).props().className).toBeUndefined();
      });

      it("li要素の1番目の子要素は、cssクラス: activeを持つ", () => {
        expect(selectedScan.at(1).hasClass("active")).toBeTruthy();
      });

      it("li要素の2番目の子要素は、cssクラス: disabledを持つ", () => {
        expect(selectedScan.at(2).hasClass("disabled")).toBeTruthy();
      });
    });

    describe("currentにregistrationInを指定した時", () => {
      const selectedScan = shallow(<Header current="registrationIn" />).find(
        "li"
      );

      it("li要素の0番目の子要素は、クラスを持たない(classNameは、undifined)", () => {
        expect(selectedScan.at(0).props().className).toBeUndefined();
      });

      it("li要素の1番目の子要素は、cssクラス: activeを持つ", () => {
        expect(selectedScan.at(1).hasClass("active")).toBeTruthy();
      });

      it("li要素の2番目の子要素は、cssクラス: disabledを持つ", () => {
        expect(selectedScan.at(2).hasClass("disabled")).toBeTruthy();
      });
    });

    describe("currentにfailedを指定した時", () => {
      const selectedInput = shallow(<Header current="failed" />).find("li");

      it("li要素の0番目の子要素は、cssクラス: activeを持つ", () => {
        expect(selectedInput.at(0).hasClass("disabled")).toBeTruthy();
      });

      it("li要素の1番目の子要素は、cssクラス: disabledを持つ", () => {
        expect(selectedInput.at(1).hasClass("disabled")).toBeTruthy();
      });

      it("li要素の2番目の子要素は、cssクラス: disabledを持つ", () => {
        expect(selectedInput.at(2).hasClass("disabled")).toBeTruthy();
      });
    });

    describe("currentにcompletionを指定した時", () => {
      const selectedCompletion = shallow(<Header current="completion" />).find(
        "li"
      );

      it("li要素の0番目の子要素は、クラスを持たない(classNameは、undifined)", () => {
        expect(selectedCompletion.at(0).props().className).toBeUndefined();
      });

      it("li要素の1番目の子要素は、クラスを持たない(classNameは、undifined)", () => {
        expect(selectedCompletion.at(1).props().className).toBeUndefined();
      });

      it("li要素の2番目の子要素は、cssクラス: activeを持つ", () => {
        expect(selectedCompletion.at(2).hasClass("active")).toBeTruthy();
      });
    });

    describe("currentに値を指定しなかった時", () => {
      const selectedCompletion = shallow(<Header />).find("li");

      it("li要素の0番目の子要素は、クラスを持たない(classNameは、undifined)", () => {
        expect(selectedCompletion.at(0).props().className).toBeUndefined();
      });

      it("li要素の1番目の子要素は、クラスを持たない(classNameは、undifined)", () => {
        expect(selectedCompletion.at(1).props().className).toBeUndefined();
      });

      it("li要素の2番目の子要素は、クラスを持たない(classNameは、undifined)", () => {
        expect(selectedCompletion.at(2).props().className).toBeUndefined();
      });
    });
  });
});
