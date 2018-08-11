// @flow
import * as React from "react";
import SingleButton from "@components/SingleButton";
import styles from "./style.css";

type RegisterSuccessType = {
  onEntryButton: (e: SyntheticEvent<HTMLButtonElement>) => {}
};

function RegisterSuccess(props: RegisterSuccessType): React.Node {
  const { onEntryButton } = props;
  const { main, textOnly, contentWithButton } = styles;
  return (
    <div className={main}>
      <div className={`${contentWithButton} ${textOnly}`}>登録しました!!</div>
      <SingleButton
        text="入室する"
        className="next"
        onButtonClick={onEntryButton}
      />
    </div>
  );
}
export default RegisterSuccess;
