import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Purpose from "@components/Purpose";

describe("Purpose.jsx", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const fn = () => {};
      const tree = renderer
        .create(
          <Purpose
            onMeetUpButtonClick={fn}
            onWorkButtonClick={fn}
            onStudyButtonClick={fn}
            onCircleButtonClick={fn}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const mockMeetUpButtonClick = jest.fn();
    const mockWorkButtonClick = jest.fn();
    const mockStudyButtonClick = jest.fn();
    const mockCircleButtonClick = jest.fn();
    const purpose = shallow(
      <Purpose
        onMeetUpButtonClick={mockMeetUpButtonClick}
        onWorkButtonClick={mockWorkButtonClick}
        onStudyButtonClick={mockStudyButtonClick}
        onCircleButtonClick={mockCircleButtonClick}
      />
    );

    it("cssクラス: containerをもつ", () => {
      expect(purpose.hasClass("container")).toBeTruthy();
    });

    describe("子要素", () => {
      const children = purpose.children();

      it("子要素に4つのbutton要素と1つのdiv要素をもつ", () => {
        expect(children).toHaveLength(5);
        expect(children.find("button")).toHaveLength(4);
        expect(children.find("div")).toHaveLength(1);
      });

      describe("1つ目のbuuton要素", () => {
        const meetUpButton = children.find("button").at(0);

        it("cssクラス: meetUpをもち、[勉強会]と表示される", () => {
          expect(meetUpButton.hasClass("meetUp")).toBeTruthy();
          expect(meetUpButton.text()).toBe("勉強会");
        });

        it("クリックすると、onMeetUpButtonClickに渡した関数が実行される", () => {
          meetUpButton.simulate("click");
          expect(mockMeetUpButtonClick).toBeCalled();
        });
      });

      describe("2つ目のbuuton要素", () => {
        const workButton = children.find("button").at(1);

        it("cssクラス: workをもち、[仕事]と表示される", () => {
          expect(workButton.hasClass("work")).toBeTruthy();
          expect(workButton.text()).toBe("仕事");
        });

        it("クリックすると、onWorkButtonClickに渡した関数が実行される", () => {
          workButton.simulate("click");
          expect(mockWorkButtonClick).toBeCalled();
        });
      });

      describe("3つ目のbuuton要素", () => {
        const studyButton = children.find("button").at(2);

        it("cssクラス: studyをもち、[自習]と表示される", () => {
          expect(studyButton.hasClass("study")).toBeTruthy();
          expect(studyButton.text()).toBe("自習");
        });

        it("クリックすると、onStudyButtonClickに渡した関数が実行される", () => {
          studyButton.simulate("click");
          expect(mockStudyButtonClick).toBeCalled();
        });
      });

      describe("4つ目のbuuton要素", () => {
        const circleButton = children.find("button").at(3);

        it("cssクラス: circleをもち、[サークル]と表示される", () => {
          expect(circleButton.hasClass("circle")).toBeTruthy();
          expect(circleButton.text()).toBe("サークル");
        });

        it("クリックすると、onMeetUpButtonClickに渡した関数が実行される", () => {
          circleButton.simulate("click");
          expect(mockCircleButtonClick).toBeCalled();
        });
      });

      describe("div要素", () => {
        it("cssクラス: messageをもち、[目的を選択して下さい]と表示される", () => {
          const div = children.find("div");
          expect(div.hasClass("message")).toBeTruthy();
          expect(div.text()).toBe("目的を選択して下さい");
        });
      });
    });
  });
});
