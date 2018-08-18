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

    it("勉強会をクリックしたら、onClickに渡した関数が実行される", () => {
      purpose.find(".meetUp").simulate("click");
      expect(mockMeetUpButtonClick).toBeCalled();
    });

    it("仕事をクリックしたら、onClickに渡した関数が実行される", () => {
      purpose.find(".work").simulate("click");
      expect(mockWorkButtonClick).toBeCalled();
    });

    it("自習をクリックしたら、onClickに渡した関数が実行される", () => {
      purpose.find(".study").simulate("click");
      expect(mockStudyButtonClick).toBeCalled();
    });

    it("サークルをクリックしたら、onClickに渡した関数が実行される", () => {
      purpose.find(".circle").simulate("click");
      expect(mockCircleButtonClick).toBeCalled();
    });
  });
});
