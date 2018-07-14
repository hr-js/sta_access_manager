// @flow
import * as React from "react";
import styles from "./style.css";

type PropType = {
  children: React.Node,
  type: string
};

/**
 * デフォルトクラス + 背景クラスを取得
 * backgroundで無効な値が指定されたら、デフォルト背景を指定
 */
function getClassName(type: string): string {
  const { main, standard, work, study, meetUp, circle, exit, error } = styles;
  if (type === "work") return `${main} ${work}`;
  if (type === "study") return `${main} ${study}`;
  if (type === "meetUp") return `${main} ${meetUp}`;
  if (type === "circle") return `${main} ${circle}`;
  if (type === "exit") return `${main} ${exit}`;
  if (type === "error") return `${main} ${error}`;
  return `${main} ${standard}`;
}

function MainFlame(props: PropType): React.Node {
  const { children, type } = props;
  const { main } = styles;
  return <main className={getClassName(type)}>{children}</main>;
}
export default MainFlame;
