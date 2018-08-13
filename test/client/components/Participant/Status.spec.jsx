import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Status from "@components/Participant/Status";

describe("Participant.Status.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<Status isEntry />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("isEntryを指定した時、共通cssクラス以外にentryを持ち、入と表示される", () => {
      const status = shallow(<Status isEntry />);
      expect(status.hasClass("entry")).toBeTruthy();
      expect(status.text("入")).toBeTruthy();
    });

    it("isEntryを指定しない時、共通cssクラス以外にexitを持ち、退と表示される", () => {
      const status = shallow(<Status />);
      expect(status.hasClass("exit")).toBeTruthy();
      expect(status.text("退")).toBeTruthy();
    });
  });
});
