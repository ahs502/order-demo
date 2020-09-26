import State, { ContentInitializationStatus } from "./State";

const initialState: State = {
  currentUser: null,
  contentInitializationStatus: ContentInitializationStatus.NOT_INITIALIZED,
  contentInitializationError: null,
  content: {
    pages: [],
  },
};

export default initialState;
