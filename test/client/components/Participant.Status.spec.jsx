import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Status from "@components/Participant/Status";

describe("Participant.Status.jsxjのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンタリング", () => {
      const tree = renderer.create(<Status isEntry />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    describe("属性にisEntryを指定した時", () => {
      it("共通のcssクラスの他にentryをもち、入と表示される", () => {
        const status = shallow(<Status isEntry />);
        expect(status.hasClass("columnStatus")).toBeTruthy();
        expect(status.hasClass("entry")).toBeTruthy();
        expect(status.text("入")).toBeTruthy();
      });
    });

    describe("属性にisEntryを指定しない時", () => {
      it("共通のcssクラスの他にexitをもち、退と表示される", () => {
        const status = shallow(<Status />);
        expect(status.hasClass("columnStatus")).toBeTruthy();
        expect(status.hasClass("exit")).toBeTruthy();
        expect(status.text("退")).toBeTruthy();
      });
    });
  });
});
