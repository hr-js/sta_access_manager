// @flow
import * as React from "react";
import SingleButton from "@components/SingleButton";
import styles from "./style.css";

type RegisterFailedType = {
  onBackButton: (e: SyntheticEvent<HTMLButtonElement>) => {}
};

function RegisterFailed(props: RegisterFailedType): React.Node {
  const { onBackButton } = props;
  const { main, textOnly, contentWithButton } = styles;
  return (
    <div className={main}>
      <div className={`${contentWithButton} ${textOnly}`}>
        登録に失敗しました
      </div>
      <SingleButton
        text="入力画面に戻る"
        className="default"
        onButtonClick={onBackButton}
      />
    </div>
  );
}
export default RegisterFailed;
