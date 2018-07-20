import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import ListBody from "@components/Participant/ListBody";
import Purpose from "@components/Participant/Purpose";
import Status from "@components/Participant/Status";
import { shortParticipantData, longParticipantData } from "./testData";

describe("Participant.ListBody.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer
        .create(<ListBody listData={shortParticipantData} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const listBody = shallow(<ListBody listData={shortParticipantData} />);
    const listItems = listBody.find("li");

    it("Purposeコンポーネントのpurposeに、値を渡している", () => {
      listItems.forEach((node, index) =>
        expect(
          node.contains(
            <Purpose purpose={shortParticipantData[index].purpose} />
          )
        )
      );
    });

    it("StatusコンポーネントのisEntryに、値を渡している", () => {
      listItems.forEach((node, index) =>
        expect(
          node.contains(
            <Status isEntry={shortParticipantData[index].isEntry} />
          )
        )
      );
    });

    it("listItemの要素全てにcssクラス: buttomをもつ", () => {
      listItems.forEach(node => {
        expect(node.hasClass("buttom")).toBeTruthy();
      });
    });

    describe("listDataにlongParticipantDataを指定した時", () => {
      it("最後の要素はcssクラス: buttomをもたない", () => {
        const longListItems = shallow(
          <ListBody listData={longParticipantData} />
        ).find("li");
        const { length } = longListItems;
        longListItems.forEach((node, index) => {
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
