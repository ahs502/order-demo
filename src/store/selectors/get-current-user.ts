import User from "../../models/User";
import State from "../State";

export default function getCurrentUser(state: State): User {
  return state.currentUser;
}
