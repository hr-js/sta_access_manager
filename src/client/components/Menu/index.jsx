// @flow
import * as React from "react";
import styles from "./style.css";

type PropType = {
  current: string,
  onButtonClick: (current: string) => void
};

const menuList: Array<string> = ["入退室処理", "ユーザ登録", "利用者一覧"];

function Menu(props: PropType): React.Node {
  const { current, onButtonClick } = props;
  const { menu, list, button, selected } = styles;

  const listItems: Array<React.Node> = menuList.map(
    (item: string): React.Node => {
      const className: string =
        item === current ? `${button} ${selected}` : button;
      return (
        <li key={item}>
          <button
            className={className}
            onClick={() => {
              onButtonClick(item);
            }}
          >
            {item}
          </button>
        </li>
      );
    }
  );

  return (
    <nav className={menu}>
      <ul className={list}>{listItems}</ul>
    </nav>
  );
}
export default Menu;
