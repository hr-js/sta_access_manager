// @flow
import * as React from "react";
import styles from "./style.css";

type PropType = {
  children: React.Node
};

function MainFlame(props: PropType): React.Node {
  const { children } = props;
  const { main } = styles;
  return <main className={main}>{children}</main>;
}
export default MainFlame;
