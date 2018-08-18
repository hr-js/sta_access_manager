// @flow
import * as React from "react";
import styles from "./style.css";

type PropType = {
  children: React.Node,
  type: string | void
};

/**
 * 背景クラスを取得
 * backgroundで無効な値が指定されたら、デフォルト背景を指定
 */
function getClassName(type: string = ""): string {
  const {
    mainFlame,
    standard,
    work,
    study,
    meetUp,
    circle,
    exit,
    error
  } = styles;

  if (type === "work") return `${mainFlame} ${work}`;
  if (type === "study") return `${mainFlame} ${study}`;
  if (type === "meetUp") return `${mainFlame} ${meetUp}`;
  if (type === "circle") return `${mainFlame} ${circle}`;
  if (type === "exit") return `${mainFlame} ${exit}`;
  if (type === "error") return `${mainFlame} ${error}`;

  return `${mainFlame} ${standard}`;
}

function MainFlame(props: PropType): React.Node {
  const { children, type } = props;
  const { main } = styles;
  return (
    <main className={getClassName(type)}>
      <div className={main}>{children}</div>
    </main>
  );
}
export default MainFlame;
