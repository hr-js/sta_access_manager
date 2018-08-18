import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
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
    delete process.env.E_MAIL_DOMAIN;
    /**
     * testする内容
     * - propsに指定された値, 関数が想定通りに表示されている、渡されている
     */
    const onFirstNameChange = () => {};
    const onLastNameChange = () => {};
    const onEmailChange = () => {};
    const onClickNextButton = () => {};
    const submitFunc = jest.fn();

    const registerInput = shallow(
      <RegisterInput
        firstNameError="firstNameError"
        firstNameValue="firstName"
        onFirstNameChange={onFirstNameChange}
        lastNameError="lastNameError"
        lastNameValue="lastName"
        onLastNameChange={onLastNameChange}
        emailError="emailError"
        emailValue="email"
        onEmailChange={onEmailChange}
        onClickNextButton={onClickNextButton}
        onSubmitForm={submitFunc}
      />
    );

    it("form要素のonSubmitに、onSubmitFormに指定した関数を渡している", () => {
      expect(registerInput.find("form").prop("onSubmit")).toBe(submitFunc);
    });

    describe("Inputコンポーネント(firstName)", () => {
      const firstName = registerInput.find("#firstName");

      it("errorに、firstNameErrorで指定された値が渡されている", () => {
        expect(firstName.prop("error")).toBe("firstNameError");
      });

      it("valueに、firstNameValueで指定された値が渡されている", () => {
        expect(firstName.prop("value")).toBe("firstName");
      });

      it("onChangeに、onFirstNameChangeで指定された関数が渡されている", () => {
        expect(firstName.prop("onChange")).toBe(onFirstNameChange);
      });
    });

    describe("Inputコンポーネント(lastName)", () => {
      const lastName = registerInput.find("#lastName");

      it("errorに、lastNameErrorで指定された値が渡されている", () => {
        expect(lastName.prop("error")).toBe("lastNameError");
      });

      it("valueに、lastNameValueで指定された値が渡されている", () => {
        expect(lastName.prop("value")).toBe("lastName");
      });

      it("onChangeに、onLastNameChangeで指定された関数が渡されている", () => {
        expect(lastName.prop("onChange")).toBe(onLastNameChange);
      });
    });

    describe("Inputコンポーネント(email)", () => {
      const email = registerInput.find("#email");

      it("errorに、emailErrorで指定された値が渡されている", () => {
        expect(email.prop("error")).toBe("emailError");
      });

      it("valueに、emailValueで指定された値が渡されている", () => {
        expect(email.prop("value")).toBe("email");
      });

      it("onChangeに、onEmailChangeで指定された関数が渡されている", () => {
        expect(email.prop("onChange")).toBe(onEmailChange);
      });

      it("process.env.E_MAIL_DOMAINが設定されていない時、デフォルト値が表示される", () => {
        expect(registerInput.find(".domain").text()).toBe("@hoge.com");
      });

      it("process.env.E_MAIL_DOMAINが設定されている時、設定された値が表示される", () => {
        process.env.E_MAIL_DOMAIN = "test.com";

        const fn = () => {};
        const domain = shallow(
          <RegisterInput
            firstNameError=""
            firstNameValue=""
            onFirstNameChange={fn}
            lastNameError=""
            lastNameValue=""
            onLastNameChange={fn}
            emailError=""
            emailValue=""
            onEmailChange={fn}
            onClickNextButton={fn}
            onSubmitForm={fn}
          />
        )
          .find(".domain")
          .text();

        expect(domain).toBe("@test.com");
      });
    });

    it("SingleButtonをクリックした時、form要素のonSubmitに渡した関数が呼ばれる", () => {
      registerInput.find("form").simulate("submit");
      expect(submitFunc).toBeCalled();
    });
  });
});
