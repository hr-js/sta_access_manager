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
    it("cssクラス: columnPurpose, borderをもつ", () => {
      const purpose = shallow(<Purpose />);
      expect(purpose.hasClass("columnPurpose")).toBeTruthy();
      expect(purpose.hasClass("border")).toBeTruthy();
    });

    describe("purposeにstudyを指定した時", () => {
      it("共通のcssクラスの他にstudyをもち、自習と表示される", () => {
        const purpose = shallow(<Purpose purpose="study" />);
        expect(purpose.hasClass("columnPurpose")).toBeTruthy();
        expect(purpose.hasClass("border")).toBeTruthy();
        expect(purpose.hasClass("study")).toBeTruthy();
        expect(purpose.text("自習")).toBeTruthy();
      });
    });

    describe("purposeにmeetUpを指定した時", () => {
      it("共通のcssクラスの他にmeetUpをもち、勉強会と表示される", () => {
        const purpose = shallow(<Purpose purpose="meetUp" />);
        expect(purpose.hasClass("columnPurpose")).toBeTruthy();
        expect(purpose.hasClass("border")).toBeTruthy();
        expect(purpose.hasClass("meetUp")).toBeTruthy();
        expect(purpose.text("勉強会")).toBeTruthy();
      });
    });

    describe("purposeにworkを指定した時", () => {
      it("共通のcssクラスの他にworkをもち、仕事と表示される", () => {
        const purpose = shallow(<Purpose purpose="work" />);
        expect(purpose.hasClass("columnPurpose")).toBeTruthy();
        expect(purpose.hasClass("border")).toBeTruthy();
        expect(purpose.hasClass("work")).toBeTruthy();
        expect(purpose.text("仕事")).toBeTruthy();
      });
    });

    describe("purposeにcircleを指定した時", () => {
      it("共通のcssクラスの他にcircleをもち、サークルと表示される", () => {
        const purpose = shallow(<Purpose purpose="circle" />);
        expect(purpose.hasClass("columnPurpose")).toBeTruthy();
        expect(purpose.hasClass("border")).toBeTruthy();
        expect(purpose.hasClass("circle")).toBeTruthy();
        expect(purpose.text("サークル")).toBeTruthy();
      });
    });
  });
});
