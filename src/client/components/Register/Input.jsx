// @flow
import * as React from "react";
import styles from "./style.css";

type InputType = {
  id: string,
  label: string,
  error: string,
  value: string,
  onChange: (e: SyntheticInputEvent<HTMLInputElement>) => {}
};

function Input(props: InputType): React.Node {
  const { id, label, error, value, onChange } = props;
  const { inputArea, input, bad, message } = styles;

  const inputClass = error.length > 0 ? `${input} ${bad}` : input;

  return (
    <div className={inputArea}>
      <label htmlFor={id}>
        {label}
        <span className={message}>{error}</span>
      </label>
      <input
        id={id}
        className={inputClass}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default Input;
