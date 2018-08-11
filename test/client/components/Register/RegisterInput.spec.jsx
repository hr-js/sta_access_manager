import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import RegisterInput from "@components/Register/RegisterInput";

describe("RegisterInput.jsxのテスト", () => {
  describe("スナップショット", () => {
    it("正しいレンダリング", () => {
      const fn = () => {};
      const tree = renderer.create(
        <RegisterInput
          firstNameValue="firstName"
          firstNameError=""
          lastNameValue="lastName"
          lastNameError=""
          emailValue="email"
          emailError=""
          onFirstNameChange={fn}
          onLastNameChange={fn}
          onEmailChange={fn}
          onClickNextButton={fn}
          onSubmitForm={fn}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe("コンポーネントのテスト", () => {
    const onFirstNameChange = () => {};
    const onLastNameChange = () => {};
    const onEmailChange = () => {};
    const onClickNextButton = jest.fn();
    const submitFunc = jest.fn();
    const stantardInput = shallow(
      <RegisterInput
        firstNameValue="firstName"
        firstNameError=""
        lastNameValue="lastName"
        lastNameError=""
        emailValue="email"
        emailError=""
        onFirstNameChange={onFirstNameChange}
        onLastNameChange={onLastNameChange}
        onEmailChange={onEmailChange}
        onClickNextButton={onClickNextButton}
        onSubmitForm={submitFunc}
      />
    );

    it("cssクラス: mainをもつ", () => {
      expect(stantardInput.hasClass("main")).toBeTruthy();
    });

    it("form要素のonSubmitに関数を渡している", () => {
      expect(stantardInput.find("form").prop("onSubmit")).toBe(submitFunc);
    });

    it("form要素の子要素divは、cssクラス: contentWithButtonをもつ", () => {
      expect(
        stantardInput.find("form > div").hasClass("contentWithButton")
      ).toBeTruthy();
    });

    it("form要素の子要素divは、2つのdiv要素をもつ", () => {
      expect(stantardInput.find("form > div").children()).toHaveLength(2);
    });

    it("2つのdiv要素の1つ目は、cssクラス: inputNameをもつ", () => {
      expect(
        stantardInput
          .find("form > div")
          .childAt(0)
          .hasClass("inputName")
      ).toBeTruthy();
    });

    it("2つのdiv要素の2つ目は、cssクラス: inputEmailをもつ", () => {
      expect(
        stantardInput
          .find("form > div")
          .childAt(1)
          .hasClass("inputEmail")
      ).toBeTruthy();
    });

    it("2つのdiv要素の2つ目は、cssクラス: domainをもつspan要素をもつ", () => {
      const span = stantardInput
        .find("form > div")
        .childAt(1)
        .find("span");

      expect(span).toHaveLength(1);
      expect(span.hasClass("domain")).toBeTruthy();
    });

    it("form要素はInputコンポーネントを3つもつ", () => {
      expect(stantardInput.find("Input")).toHaveLength(3);
    });

    it("1つ目のInputコンポーネントにfirstNameの情報を渡している", () => {
      const { id, label, error, value, onChange } = stantardInput
        .find("Input")
        .at(0)
        .props();

      expect(id).toBe("firstName");
      expect(label).toBe("姓");
      expect(error).toBe("");
      expect(value).toBe("firstName");
      expect(onChange).toBe(onFirstNameChange);
    });

    it("2つ目のInputコンポーネントにlastNameの情報を渡している", () => {
      const { id, label, error, value, onChange } = stantardInput
        .find("Input")
        .at(1)
        .props();

      expect(id).toBe("lastName");
      expect(label).toBe("名");
      expect(error).toBe("");
      expect(value).toBe("lastName");
      expect(onChange).toBe(onLastNameChange);
    });

    it("3つ目のInputコンポーネントにemailの情報を渡している", () => {
      const { id, label, error, value, onChange } = stantardInput
        .find("Input")
        .at(2)
        .props();

      expect(id).toBe("email");
      expect(label).toBe("Email");
      expect(error).toBe("");
      expect(value).toBe("email");
      expect(onChange).toBe(onEmailChange);
    });

    it("form要素はSingleButtonコンポーネントを1つもつ", () => {
      expect(stantardInput.find("SingleButton")).toHaveLength(1);
    });

    it("SingleButtonコンポーネントに必要な情報を渡している", () => {
      const { text, className, onButtonClick } = stantardInput
        .find("SingleButton")
        .props();

      expect(text).toBe("次へ");
      expect(className).toBe("next");
      expect(onButtonClick).toBe(onClickNextButton);
    });

    describe("process.env.E_MAIL_DOMAINが設定されていない時", () => {
      it("メールアドレスのドメイン名は、デフォルト値", () => {
        delete process.env.E_MAIL_DOMAIN;
        const defaultDomainInput = shallow(
          <RegisterInput
            firstNameValue="firstName"
            firstNameError=""
            lastNameValue="lastName"
            lastNameError=""
            emailValue="email"
            emailError=""
            onFirstNameChange={onFirstNameChange}
            onLastNameChange={onLastNameChange}
            onEmailChange={onEmailChange}
            onClickNextButton={onClickNextButton}
            onSubmitForm={submitFunc}
          />
        );
        expect(defaultDomainInput.find("span").text()).toBe("@hoge.com");
      });
    });

    describe("process.env.E_MAIL_DOMAINが設定されてる時", () => {
      it("メールアドレスのドメイン名は、設定された値", () => {
        process.env.E_MAIL_DOMAIN = "test.com";
        const customDomainInput = shallow(
          <RegisterInput
            firstNameValue="firstName"
            firstNameError=""
            lastNameValue="lastName"
            lastNameError=""
            emailValue="email"
            emailError=""
            onFirstNameChange={onFirstNameChange}
            onLastNameChange={onLastNameChange}
            onEmailChange={onEmailChange}
            onClickNextButton={onClickNextButton}
            onSubmitForm={submitFunc}
          />
        );
        expect(customDomainInput.find("span").text()).toBe("@test.com");
      });
    });

    describe("SingleButtonをクリックした時", () => {
      it("form要素のonSubmitに渡した関数が呼ばれる", () => {
        const fullDom = mount(
          <RegisterInput
            firstNameValue="firstName"
            firstNameError=""
            lastNameValue="lastName"
            lastNameError=""
            emailValue="email"
            emailError=""
            onFirstNameChange={onFirstNameChange}
            onLastNameChange={onLastNameChange}
            onEmailChange={onEmailChange}
            onClickNextButton={onClickNextButton}
            onSubmitForm={submitFunc}
          />
        );
        // クリック
        fullDom
          .find("SingleButton")
          .find("button")
          .simulate("click");
        expect(onClickNextButton).toBeCalled();
        // submit(ブラウザと違うため明示的にsubmit操作を行う)
        fullDom.find("form").simulate("submit");
        expect(submitFunc).toBeCalled();
      });
    });
  });
});
