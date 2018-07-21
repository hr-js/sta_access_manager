// @flow
import * as React from "react";
import ListHeader from "./ListHeader";
import type { DataType } from "./ListBody";
import ListBody from "./ListBody";
import styles from "./style.css";

// 参加者
type ParticipantType = {
  data: Array<DataType>
};

function Participant(props: ParticipantType): React.Node {
  const { flame, list } = styles;
  const { data } = props;

  return (
    <div className={flame}>
      <div className={list}>
        <ListHeader />
        <ListBody listData={data} />
      </div>
    </div>
  );
}

export default Participant;
