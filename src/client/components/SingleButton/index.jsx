// @flow
import * as React from "react";
import styles from "./style.css";

type SingleButtonType = {
  text: string | void,
  className: string | void,
  onButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => {} | void
};

function SingleButton(props: SingleButtonType): React.Node {
  const { text = "", className = "default", onButtonClick } = props;
  const { singleButton } = styles;

  return (
    <div className={singleButton}>
      <button className={styles[className]} onClick={onButtonClick}>
        {text}
      </button>
    </div>
  );
}
export default SingleButton;
