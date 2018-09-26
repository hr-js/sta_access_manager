// @flow
import type { Action } from "@types";

function id(state: string = "", action: Action): string {
  switch (action.type) {
    case "ADD_ID":
      return action.id;
    case "REMOVE_ID":
      return "";
    default:
      return state;
  }
}
export default id;
