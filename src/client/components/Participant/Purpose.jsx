// @flow
import * as React from "react";
import styles from "./style.css";

type PurposeType = {
  purpose: string | void
};

function Purpose(props: PurposeType): React.Node {
  const { purpose } = props;
  const { columnPurpose, border, work, study, meetUp, circle } = styles;

  let background: string = "";
  let value: string = "";

  if (purpose === "study") {
    background = study;
    value = "自習";
  }
  if (purpose === "meetUp") {
    background = meetUp;
    value = "勉強会";
  }
  if (purpose === "work") {
    background = work;
    value = "仕事";
  }
  if (purpose === "circle") {
    background = circle;
    value = "サークル";
  }

  return (
    <div className={`${columnPurpose} ${background} ${border}`}>{value}</div>
  );
}
export default Purpose;
