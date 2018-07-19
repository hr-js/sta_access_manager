import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import ListBody from "@components/Participant/ListBody";
import { shortParticipantData, longParticipantData } from "./testData";

describe("Participant.ListBody.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンタリング", () => {
      const tree = renderer
        .create(<ListBody listData={shortParticipantData} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("Purposeコンポーネントのpurposeに、値を渡している", () => {
      const purposeComponents = shallow(
        <ListBody listData={shortParticipantData} />
      ).find("Purpose");

      shortParticipantData.forEach((data, index) => {
        expect(purposeComponents.at(index).prop("purpose")).toBe(data.purpose);
      });
    });

    it("StatusコンポーネントのisEntryに、値を渡している", () => {
      const statusComponents = shallow(
        <ListBody listData={shortParticipantData} />
      ).find("Status");

      statusComponents.forEach((node, index) => {
        if (shortParticipantData[index].isEntry) {
          expect(node.prop("isEntry")).toBeTruthy();
        } else {
          expect(node.prop("isEntry")).toBeFalsy();
        }
      });
    });

    describe("listDataにshortParticipantDataを指定した時", () => {
      it("listItemの要素全てにcssクラス: buttomをもつ", () => {
        const listItems = shallow(
          <ListBody listData={shortParticipantData} />
        ).find("li");

        listItems.forEach(node => {
          expect(node.hasClass("buttom")).toBeTruthy();
        });
      });
    });

    describe("listDataにlongParticipantDataを指定した時", () => {
      it("最後の要素はcssクラス: buttomをもたない", () => {
        const listItems = shallow(
          <ListBody listData={longParticipantData} />
        ).find("li");
        const { length } = listItems;
        listItems.forEach((node, index) => {
          if (index === length - 1) {
            expect(node.hasClass("buttom")).toBeFalsy();
          } else {
            expect(node.hasClass("buttom")).toBeTruthy();
          }
        });
      });
    });
  });
});
