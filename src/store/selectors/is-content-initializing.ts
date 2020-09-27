import State, { ContentInitializationStatus } from "../State";

export default function isContentInitializing(state: State): boolean {
  return (
    state.contentInitializationStatus !==
    ContentInitializationStatus.INITIALIZED
  );
}
