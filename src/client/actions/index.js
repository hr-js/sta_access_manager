// @flow
import type {
  User,
  OnlyTypeAction,
  AddIdAction,
  ChangeFirstNameAction,
  ChangeLastNameAction,
  ChangeMailAddressAction,
  ChangeRegisterStepAction,
  AddParticipantAction
} from "@types";

// isConnected
export function requestStart(): OnlyTypeAction {
  return {
    type: "REQUEST_START"
  };
}

export function requestEnd(): OnlyTypeAction {
  return {
    type: "REQUEST_END"
  };
}

// id
export function addId(id: string): AddIdAction {
  return {
    type: "ADD_ID",
    id
  };
}

export function removeId(): OnlyTypeAction {
  return {
    type: "REMOVE_ID"
  };
}

/**
 * Menu
 */
export function selectTop(): OnlyTypeAction {
  return {
    type: "SELECT_TOP"
  };
}

export function selectRegister(): OnlyTypeAction {
  return {
    type: "SELECT_REGISTER"
  };
}

export function selectParticipant(): OnlyTypeAction {
  return {
    type: "SELECT_PARTICIPANT"
  };
}

/**
 * First Name
 */
export function changeFirstName(firstName: string): ChangeFirstNameAction {
  return {
    type: "CHANGE_FIRST_NAME",
    firstName
  };
}

export function clearFirstName(): OnlyTypeAction {
  return {
    type: "CLEAR_FIRST_NAME"
  };
}

/**
 * Last Name
 */
export function changeLastName(lastName: string): ChangeLastNameAction {
  return {
    type: "CHANGE_LAST_NAME",
    lastName
  };
}

export function clearLastName(): OnlyTypeAction {
  return {
    type: "CLEAR_LAST_NAME"
  };
}

/**
 * Mail Address
 */
export function changeMailAddress(
  mailAddress: string
): ChangeMailAddressAction {
  return {
    type: "CHANGE_MAIL_ADDRESS",
    mailAddress
  };
}

export function clearMailAddress(): OnlyTypeAction {
  return {
    type: "CLEAR_MAIL_ADDRESS"
  };
}

/**
 * Register Step
 */
export function changeRegisterStep(
  registerStep: string
): ChangeRegisterStepAction {
  return {
    type: "CHANGE_REGISTER_STEP",
    registerStep
  };
}

export function clearRegisterStep(): OnlyTypeAction {
  return {
    type: "CLEAR_REGISTER_STEP"
  };
}

/**
 * Input Validation Result
 */
export function showInputValidationResult(): OnlyTypeAction {
  return {
    type: "SHOW_INPUT_VALIDATION_RESULT"
  };
}

export function hideInputValidationResult(): OnlyTypeAction {
  return {
    type: "HIDE_INPUT_VALIDATION_RESULT"
  };
}

/**
 * Participant
 */
export function addParticipant(participant: Array<User>): AddParticipantAction {
  return {
    type: "ADD_PARTICIPANT",
    participant
  };
}

export function removeParticipant(): OnlyTypeAction {
  return {
    type: "REMOVE_PARTICIPANT"
  };
}
