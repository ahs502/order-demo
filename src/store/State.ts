import type Content from "../models/Content";
import type User from "../models/User";

export default interface State {
  readonly currentUser: User | null;
  readonly contentInitializationStatus:
    | "not initialized"
    | "initializing"
    | "initialized"
    | "failed to be initialized";
  readonly contentInitializationError: any;
  readonly content: Content;
}
