import Content from "./Content";
import User from "./User";

export default interface State {
  readonly currentUser: User;
  readonly content: Content;
}
