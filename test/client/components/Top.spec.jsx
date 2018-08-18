import React from "react";
import renderer from "react-test-renderer";
import Top from "@components/Top";

describe("Top.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<Top />);
      expect(tree).toMatchSnapshot();
    });
  });
});
