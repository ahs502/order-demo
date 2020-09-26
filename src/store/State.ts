import Content from "../models/Content";
import User from "../models/User";

export default interface State {
  readonly currentUser: User;
  readonly contentInitializationStatus: ContentInitializationStatus;
  readonly contentInitializationError: any;
  readonly content: Content;
}

export enum ContentInitializationStatus {
  NOT_INITIALIZED = "NOT_INITIALIZED",
  INITIALIZING = "INITIALIZING",
  INITIALIZED = "INITIALIZED",
  FAILED_TO_BE_INITIALIZED = "FAILED_TO_BE_INITIALIZED",
}
