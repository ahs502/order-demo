import type State from "./State";

const initialState: State = {
  currentUser: null,
  contentInitializationStatus: "not initialized",
  contentInitializationError: null,
  content: {
    pages: [],
  },
};

export default initialState;
