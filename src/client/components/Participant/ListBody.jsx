// @flow
import * as React from "react";
import Purpose from "./Purpose";
import Status from "./Status";
import styles from "./style.css";

export type DataType = {
  name: string,
  purpose: string,
  isEntry: boolean
};

type ListBodyType = {
  listData: Array<DataType>
};

function ListBody(props: ListBodyType): React.Node {
  const { body, columnName, border, buttom } = styles;
  const { listData } = props;
  const { length } = listData;

  const listItems = listData.map(
    (data: DataType, index: number): React.Node => {
      const { name, purpose, isEntry } = data;
      const listButtom: string =
        index === length - 1 && index > 5 ? "" : buttom;
      const key = `list-${index}`;

      return (
        <li key={key} className={listButtom}>
          <div className={`${columnName} ${border}`}>{name}</div>
          <Purpose purpose={purpose} />
          <Status isEntry={isEntry} />
        </li>
      );
    }
  );

  return (
    <div className={body}>
      <ul>{listItems}</ul>
    </div>
  );
}
export default ListBody;
