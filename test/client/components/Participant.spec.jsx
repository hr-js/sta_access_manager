import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Participant from "@components/Participant";
import ListHeader from "@components/Participant/ListHeader";
import ListBody from "@components/Participant/ListBody";
import { shortParticipantData } from "./testData";

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
    const participant = shallow(<Participant data={shortParticipantData} />);
    it("cssクラス: flameをもつ", () => {
      expect(participant.hasClass("flame")).toBeTruthy();
    });

    it("childrenは、cssクラス: listをもつ", () => {
      expect(participant.children().hasClass("list")).toBeTruthy();
    });

    it("ListHeaderコンポーネントを使用している", () => {
      expect(participant.contains(<ListHeader />)).toBeTruthy();
    });

    it("ListBodyコンポーネントのlistDataに、shortParticipantDataを渡している", () => {
      expect(
        participant.contains(<ListBody listData={shortParticipantData} />)
      ).toBeTruthy();
    });
  });
});
