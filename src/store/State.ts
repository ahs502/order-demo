import Content from "../models/Content";
import Page from "../models/Page";
import Transaction from "../models/Transaction";
import User from "../models/User";

export default interface State {
  readonly currentUser: User;
  readonly contentInitializationStatus: ContentInitializationStatus;
  readonly contentInitializationError: any;
  readonly content: Content;
  readonly selectedPage: Page;
  readonly applyingTransaction: Transaction | null;
}

export enum ContentInitializationStatus {
  NOT_INITIALIZED = "NOT_INITIALIZED",
  INITIALIZING = "INITIALIZING",
  INITIALIZED = "INITIALIZED",
  FAILED_TO_BE_INITIALIZED = "FAILED_TO_BE_INITIALIZED",
}
