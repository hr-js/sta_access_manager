import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Participant from "@components/Participant";
import { shortParticipantData } from "../testData";

describe("Participantのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const tree = renderer
        .create(<Participant data={shortParticipantData} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    it("ListBodyコンポーネントのlistDataに、dataで指定した値が渡されている", () => {
      const participant = shallow(<Participant data={shortParticipantData} />);
      expect(participant.find("ListBody").prop("listData")).toBe(
        shortParticipantData
      );
    });
  });
});
