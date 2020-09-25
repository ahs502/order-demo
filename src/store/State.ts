import type Content from "../models/Content";
import type User from "../models/User";

export default interface State {
  readonly currentUser: User | null;
  readonly contentInitialized: boolean;
  readonly content: Content;
}
