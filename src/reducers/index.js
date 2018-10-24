import { combineReducers } from "redux";
import notifications from "./notifications";
import messages from "./messages";

export default combineReducers({
  notifications,
  messages
});
