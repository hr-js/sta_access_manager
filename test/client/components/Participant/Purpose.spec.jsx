import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Purpose from "@components/Participant/Purpose";

describe("Participant.Purpose.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer.create(<Purpose purpose="study" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("purposeにstudyを指定した時、共通cssクラス以外にstudyを持ち、自習と表示される", () => {
      const purpose = shallow(<Purpose purpose="study" />);
      expect(purpose.hasClass("study")).toBeTruthy();
      expect(purpose.text("自習")).toBeTruthy();
    });

    it("purposeにmeetUpを指定した時、共通cssクラス以外にmeetUpを持ち、勉強会と表示される", () => {
      const purpose = shallow(<Purpose purpose="meetUp" />);
      expect(purpose.hasClass("meetUp")).toBeTruthy();
      expect(purpose.text("勉強会")).toBeTruthy();
    });

    it("purposeにworkを指定した時、共通cssクラス以外にworkを持ち、仕事と表示される", () => {
      const purpose = shallow(<Purpose purpose="work" />);
      expect(purpose.hasClass("work")).toBeTruthy();
      expect(purpose.text("仕事")).toBeTruthy();
    });

    it("purposeにcircleを指定した時、共通cssクラス以外にcircleを持ち、サークルと表示される", () => {
      const purpose = shallow(<Purpose purpose="circle" />);
      expect(purpose.hasClass("circle")).toBeTruthy();
      expect(purpose.text("サークル")).toBeTruthy();
    });

    it("purposeに上記以外の値を指定した時、共通cssクラスのみを持ち、表示される文字はない", () => {
      const purpose = shallow(<Purpose purpose="test" />);
      expect(purpose.prop("className")).toBe("columnPurpose border ");
      expect(purpose.text()).toBe("");
    });
  });
});
