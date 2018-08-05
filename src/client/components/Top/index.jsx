// @flow
import * as React from "react";
import styles from "./style.css";

function Top(): React.Node {
  const { top, label } = styles;
  return (
    <div className={top}>
      <div>カードをスキャンして下さい</div>
      <div className={label}>Created by hr-js</div>
    </div>
  );
}
export default Top;
