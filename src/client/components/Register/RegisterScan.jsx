// @flow
import * as React from "react";
import SingleButton from "@components/SingleButton";
import styles from "./style.css";

type RegisterScanType = {
  onCancelButton: (e: SyntheticEvent<HTMLButtonElement>) => {}
};

function RegisterScan(props: RegisterScanType): React.Node {
  const { onCancelButton } = props;
  const { main, scanText, contentWithButton } = styles;
  return (
    <div className={main}>
      <div className={`${contentWithButton} ${scanText}`}>
        カードをスキャンして下さい。
      </div>
      <SingleButton
        text="キャンセル"
        className="default"
        onButtonClick={onCancelButton}
      />
    </div>
  );
}
export default RegisterScan;
