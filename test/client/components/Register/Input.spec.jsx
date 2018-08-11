import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Input from "@components/Register/Input";

describe("Register.Input.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(
        <Input
          id="id"
          label="ラベル"
          error="エラー"
          value="value"
          onChange={() => {}}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const mockChange = jest.fn();
    const input = shallow(
      <Input
        id="id"
        label="ラベル"
        error=""
        value="value"
        onChange={mockChange}
      />
    );

    it("idに指定された値が、input要素のidに指定されている", () => {
      expect(input.find("input").props().id).toBe("id");
    });

    it("labelに指定された値が、ラベルとして表示されている", () => {
      expect(input.find("label").text()).toBe("ラベル");
    });

    it("valueに指定された値が、inputに入力されている", () => {
      expect(input.find("input").props().value).toBe("value");
    });

    it("inputの内容が変更されたとき、onChangeに指定した関数が呼ばれる", () => {
      input.find("input").simulate("change", "test");
      expect(mockChange.mock.calls[0][0]).toBe("test");
    });

    describe("errorに空文字が指定されている時", () => {
      it("エラーメッセージは表示されない", () => {
        expect(input.find(".message").text()).toBe("");
      });

      it("input要素はcssクラス: inputをもつ", () => {
        expect(input.find("input").hasClass("input")).toBeTruthy();
      });
    });

    describe("errorに空文字以外が指定されている時", () => {
      const badInput = shallow(
        <Input
          id="id"
          label="ラベル"
          error="error"
          value="value"
          onChange={mockChange}
        />
      );

      it("エラーメッセージとして表示される", () => {
        expect(badInput.find(".message").text()).toBe("error");
      });

      it("input要素はcssクラス: inputとbadをもつ", () => {
        expect(badInput.find("input").hasClass("input bad")).toBeTruthy();
      });
    });
  });
});
