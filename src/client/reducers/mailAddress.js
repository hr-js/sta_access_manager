// @flow
import type { Action } from "@types";

function mailAddress(state: string = "", action: Action): string {
  switch (action.type) {
    case "CHANGE_MAIL_ADDRESS":
      return action.mailAddress;
    case "CLEAR_MAIL_ADDRESS":
      return "";
    default:
      return state;
  }
}
export default mailAddress;
