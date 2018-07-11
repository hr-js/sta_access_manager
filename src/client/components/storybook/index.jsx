import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// components
import Menu from "@components/Menu";
import MainFlame from "@components/MainFlame";

import styles from "./style.css";

// storybook用のコンテナーフレーム
// eslint-disable-next-line flowtype/require-parameter-type
function ContainerFlame(props) {
  // eslint-disable-next-line react/prop-types
  return <div className={styles.container}>{props.children}</div>;
}

// #region Menu
storiesOf("Menu", module)
  .add("[ 入退室処理 ]選択時", () => (
    <Menu
      current="入退室処理"
      onButtonClick={action("引数に文字列が渡される")}
    />
  ))
  .add("[ ユーザ登録 ]選択時", () => (
    <Menu
      current="ユーザ登録"
      onButtonClick={action("引数に文字列が渡される")}
    />
  ))
  .add("[ 利用者一覧 ]選択時", () => (
    <Menu
      current="利用者一覧"
      onButtonClick={action("引数に文字列が渡される")}
    />
  ));
// #endregion Menu

// #region MainFlame
storiesOf("MainFlame", module).add("コンテンツのメインフレーム", () => (
  <ContainerFlame>
    <MainFlame>コンテンツ</MainFlame>
  </ContainerFlame>
));
// #endregion MainFlame
