// @flow
/* eslint-disable flowtype/type-id-match */
/* eslint-disable flowtype/space-after-type-colon */
import * as React from "react";
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";

// Api
export type BASE_API = {|
  +method: "get" | "post",
  +path: string
|};

export type PATH_PARAMETER_API = {|
  +method: "get",
  +path: string,
  +substr: string
|};

export type API = BASE_API | PATH_PARAMETER_API;

// Create Api Url
export type CreateApiUrlOptions = {|
  +substr: string,
  +newstr: string
|};

// Path
export type Path = string;

// Purpose
export type Purpose = "MEET_UP" | "WORK" | "STUDY" | "CIRCLE";

// User
export type User = {|
  +id: string,
  +user: {
    +name: string,
    +isEntry: boolean,
    +purpose: Purpose
  }
|};

// Request body
export type RegisterData = {|
  +id: string,
  +user: {
    +mail: string,
    +name: string
  }
|};

export type EntryData = {|
  +id: string,
  +purpose: string
|};

export type ExitData = {|
  +id: string
|};

export type RequestBody = RegisterData | EntryData | ExitData;

export type RequestOptions = {|
  +url: string,
  +method: "get" | "post",
  +data?: RequestBody
|};

// Response
// TODO: anyをやめる
export type Response = {
  +status: number,
  +data?: any
};

/**
 * Component
 */
// Common
export type CommonProps = {
  +type?: string,
  +text: string,
  +subText?: string,
  +buttonText: string,
  +buttonClass?: string,
  +onButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => {},
  +autoPageTransition: () => {}
};

// MainFlame
export type MainFlameProps = {
  +children: React.Node,
  +type?: string
};

// Menu
export type MenuButton = {|
  +name: string,
  +path: string,
  +text: string
|};

export type MenuProps = {
  +selectedMenu: string,
  +onButtonClick: (path: Path) => void
};

// Participant
export type ParticipantProps = {
  +participant: Array<User>,
  +refresh: () => {},
  +selectedMenu: () => {},
  +getParticipant: () => {}
};

export type ParticipantListBodyProps = {
  +listData: Array<User>
};

export type ParticipantPurposeProps = {
  +purpose: Purpose
};

export type ParticipantStatusProps = {
  +isEntry: boolean
};

// Purpose
export type PurposeProps = {
  +checkId: () => {},
  +unmount: () => {},
  +onPurposeButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => Promise<void>
};

// Register
export type RegisterFailureProps = {
  +autoPageTransition: () => {},
  +unmount: () => {},
  +onBackButton: () => {}
};

export type RegisterHeaderClassName = {
  +input?: string,
  +scan?: string,
  +completion?: string
};

export type RegisterHeaderProps = {
  +registerStep: string
};

export type RegisterInputProps = {
  +id: string,
  +label: string,
  +error: string,
  +value: string,
  +canShow: boolean,
  +onChange: (e: SyntheticInputEvent<HTMLInputElement>) => {}
};

export type RegisterInputFormProps = {
  +canShow: boolean,
  +firstNameValue: string,
  +firstNameError: string,
  +lastNameValue: string,
  +lastNameError: string,
  +mailAddressValue: string,
  +mailAddressError: string,
  +selectedMenu: () => {},
  +onChangeStep: () => {},
  +unmount: () => {},
  +onChangeFirstName: (e: SyntheticInputEvent<HTMLInputElement>) => {},
  +onChangeLastName: (e: SyntheticInputEvent<HTMLInputElement>) => {},
  +onChangeMailAddress: (e: SyntheticInputEvent<HTMLInputElement>) => {},
  +onClickNextButton: () => {},
  +onSubmitForm: (e: SyntheticEvent<HTMLFormElement>) => {}
};

export type RegisterScanProps = {
  +onChangeStep: () => {},
  +unmount: () => {},
  +onCancelButton: () => {}
};

export type RegisterSuccessProps = {
  +onChangeStep: () => {},
  +autoPageTransition: () => {},
  +onEntryButton: () => {}
};

// SingleButton
export type SingleButtonProps = {
  +text: string,
  +className?: string | void,
  +onButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => {}
};

// Top
export type TopProps = {
  +refresh: () => {},
  +selectedMenu: () => {}
};

/**
 * Redux
 */
// State
export type State = {
  +firstName: string,
  +id: string,
  +inputValidationResult: boolean,
  +isConnected: boolean,
  +lastName: string,
  +mailAddress: string,
  +participant: Array<User>,
  +registerStep: string,
  +selectedMenu: string
};

// Action
export type ReduxInitAction = {
  type: "@@INIT"
};

export type OnlyTypeAction = {
  type:
    | "REQUEST_START"
    | "REQUEST_END"
    | "REMOVE_ID"
    | "SELECT_TOP"
    | "SELECT_REGISTER"
    | "SELECT_PARTICIPANT"
    | "CLEAR_FIRST_NAME"
    | "CLEAR_LAST_NAME"
    | "CLEAR_MAIL_ADDRESS"
    | "CLEAR_REGISTER_STEP"
    | "SHOW_INPUT_VALIDATION_RESULT"
    | "HIDE_INPUT_VALIDATION_RESULT"
    | "REMOVE_PARTICIPANT"
};

export type AddIdAction = {
  type: "ADD_ID",
  +id: string
};

export type ChangeFirstNameAction = {
  type: "CHANGE_FIRST_NAME",
  +firstName: string
};

export type ChangeLastNameAction = {
  type: "CHANGE_LAST_NAME",
  +lastName: string
};

export type ChangeMailAddressAction = {
  type: "CHANGE_MAIL_ADDRESS",
  +mailAddress: string
};

export type ChangeRegisterStepAction = {
  type: "CHANGE_REGISTER_STEP",
  +registerStep: string
};

export type AddParticipantAction = {
  type: "ADD_PARTICIPANT",
  +participant: Array<User>
};

export type Action =
  | ReduxInitAction
  | OnlyTypeAction
  | AddIdAction
  | ChangeFirstNameAction
  | ChangeLastNameAction
  | ChangeMailAddressAction
  | ChangeRegisterStepAction
  | AddParticipantAction;

// Dispatch
export type Dispatch = ReduxDispatch<Action>;

// Store
export type Store = ReduxStore<State, Action, Dispatch>;
