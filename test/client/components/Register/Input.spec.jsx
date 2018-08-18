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

    it("label要素のhtmlForに、idで指定された値が渡されている", () => {
      expect(input.find("label").prop("htmlFor")).toBe("id");
    });

    it("label要素に、labelで指定された値が表示されている", () => {
      expect(input.find("label").text()).toBe("ラベル");
    });

    it("errorが1文字以上の時、エラーが表示される", () => {
      const badInput = shallow(
        <Input
          id="id"
          label="ラベル"
          error="error"
          value="value"
          onChange={mockChange}
        />
      );
      expect(badInput.find(".message").text()).toBe("error");
      expect(badInput.find("input").hasClass("bad")).toBeTruthy();
    });

    it("errorが0文字の時、エラーは表示されない", () => {
      expect(input.find(".message").text()).toBe("");
      expect(input.find("input").hasClass("bad")).toBeFalsy();
    });

    it("input要素のidに、idに指定された値が渡されている", () => {
      expect(input.find("input").prop("id")).toBe("id");
    });

    it("input要素に、valueで指定された値が入力されている", () => {
      expect(input.find("input").prop("value")).toBe("value");
    });

    it("input要素の内容が変更された時、onChangeに指定した関数が呼ばれる", () => {
      input.find("input").simulate("change", "test");
      expect(mockChange.mock.calls[0][0]).toBe("test");
    });
  });
});
