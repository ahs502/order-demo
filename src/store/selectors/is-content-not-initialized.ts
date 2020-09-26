import State, { ContentInitializationStatus } from "../State";

export default function isContentNotInitialized(state: State): boolean {
  return (
    state.contentInitializationStatus ===
    ContentInitializationStatus.NOT_INITIALIZED
  );
}
