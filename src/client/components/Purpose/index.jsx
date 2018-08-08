// @flow
import * as React from "react";
import styles from "./style.css";

type PurposeType = {
  onMeetUpButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => {},
  onWorkButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => {},
  onStudyButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => {},
  onCircleButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => {}
};

function Purpose(props: PurposeType): React.Node {
  const {
    onMeetUpButtonClick,
    onWorkButtonClick,
    onStudyButtonClick,
    onCircleButtonClick
  } = props;
  const { container, meetUp, work, study, circle, message } = styles;

  return (
    <div className={container}>
      <button className={meetUp} onClick={onMeetUpButtonClick}>
        勉強会
      </button>
      <button className={work} onClick={onWorkButtonClick}>
        仕事
      </button>
      <button className={study} onClick={onStudyButtonClick}>
        自習
      </button>
      <button className={circle} onClick={onCircleButtonClick}>
        サークル
      </button>
      <div className={message}>目的を選択して下さい</div>
    </div>
  );
}
export default Purpose;
