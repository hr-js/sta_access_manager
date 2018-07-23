// @flow
import * as React from "react";
import styles from "./style.css";

type RegisterHeaderType = {
  current: string
};

type ClassNameType = {
  input?: string,
  scan?: string,
  completion?: string
};

function getClassName(current: string): ClassNameType {
  const { active, disabled } = styles;

  if (current === "input") {
    return { input: active, scan: disabled, completion: disabled };
  }
  if (current === "scan") {
    return { scan: active, completion: disabled };
  }
  if (current === "completion") {
    return { completion: active };
  }
  return {};
}

function Header(props: RegisterHeaderType): React.Node {
  const { current } = props;
  const { header } = styles;
  const { input, scan, completion } = getClassName(current);
  return (
    <ol className={header}>
      <li className={input}>
        1. 入力<span>&gt;</span>
      </li>
      <li className={scan}>
        2. 読取<span>&gt;</span>
      </li>
      <li className={completion}>3. 完了</li>
    </ol>
  );
}
export default Header;
