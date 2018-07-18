// @flow
import * as React from "react";
import styles from "./style.css";

type StatusType = {
  isEntry: boolean
};

function Status(props: StatusType): React.Node {
  const { isEntry } = props;
  const { columnStatus, entry, exit } = styles;

  const className = isEntry
    ? `${columnStatus} ${entry}`
    : `${columnStatus} ${exit}`;
  const value = isEntry ? "入" : "退";

  return <div className={className}>{value}</div>;
}
export default Status;
