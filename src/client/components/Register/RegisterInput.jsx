// @flow
import * as React from "react";
import Input from "@components/Register/Input";
import SingleButton from "@components/SingleButton";
import styles from "./style.css";

type RegisterInputType = {
  firstNameValue: string,
  firstNameError: string,
  lastNameValue: string,
  lastNameError: string,
  emailValue: string,
  emailError: string,
  onFirstNameChange: (e: SyntheticInputEvent<HTMLInputElement>) => {},
  onLastNameChange: (e: SyntheticInputEvent<HTMLInputElement>) => {},
  onEmailChange: (e: SyntheticInputEvent<HTMLInputElement>) => {},
  onClickNextButton: (e: SyntheticEvent<HTMLButtonElement>) => {},
  onSubmitForm: (e: SyntheticEvent<HTMLFormElement>) => {}
};

function RegisterInput(props: RegisterInputType): React.Node {
  const {
    firstNameValue,
    firstNameError,
    lastNameValue,
    lastNameError,
    emailValue,
    emailError,
    onFirstNameChange,
    onLastNameChange,
    onEmailChange,
    onClickNextButton,
    onSubmitForm
  } = props;
  const { main, inputName, inputEmail, domain, contentWithButton } = styles;
  const domainName = process.env.E_MAIL_DOMAIN || "hoge.com";

  return (
    <div className={main}>
      <form onSubmit={onSubmitForm}>
        <div className={contentWithButton}>
          <div className={inputName}>
            <Input
              id="firstName"
              label="姓"
              error={firstNameError}
              value={firstNameValue}
              onChange={onFirstNameChange}
            />
            <Input
              id="lastName"
              label="名"
              error={lastNameError}
              value={lastNameValue}
              onChange={onLastNameChange}
            />
          </div>
          <div className={inputEmail}>
            <Input
              id="email"
              label="Email"
              error={emailError}
              value={emailValue}
              onChange={onEmailChange}
            />
            <span className={domain}>@{domainName}</span>
          </div>
        </div>
        <SingleButton
          text="次へ"
          className="next"
          onButtonClick={onClickNextButton}
        />
      </form>
    </div>
  );
}
export default RegisterInput;
