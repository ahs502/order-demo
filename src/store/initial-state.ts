import State, { ContentInitializationStatus } from "./State";

// Stuff like fetching the initial content or authentication
// are out of the scope of this assignment:
import initialContent from "./initial-data/initial-content";
import initialCurrentUser from "./initial-data/initial-current-user";

const initialState: State = {
  currentUser: initialCurrentUser,
  contentInitializationStatus: ContentInitializationStatus.NOT_INITIALIZED,
  contentInitializationError: null,
  content: initialContent,
};

export default initialState;
