// @flow
import * as React from "react";
import SingleButton from "@components/SingleButton";
import styles from "./style.css";

type CommonType = {
  type: string | void,
  text: string,
  subText: string | void,
  buttonText: string,
  buttonClass: string | void,
  onButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => {}
};

function Common(props: CommonType): React.Node {
  const { type, text, subText, buttonText, buttonClass, onButtonClick } = props;
  const { textArea, main, date, sub } = styles;
  const dateTextNode =
    type === "date" ? (
      <div className={date}>{new Date().toLocaleString()}</div>
    ) : (
      undefined
    );
  const subTextNode = subText ? (
    <div className={sub}>{subText}</div>
  ) : (
    undefined
  );

  return (
    <div>
      <div className={textArea}>
        <div className={main}>{text}</div>
        {dateTextNode}
        {subTextNode}
      </div>
      <SingleButton
        text={buttonText}
        className={buttonClass}
        onButtonClick={onButtonClick}
      />
    </div>
  );
}
export default Common;
