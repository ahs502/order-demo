import type State from "./State";

const initialState: State = {
  currentUser: null,
  contentInitialized: false,
  content: {
    pages: [],
  },
};

export default initialState;
