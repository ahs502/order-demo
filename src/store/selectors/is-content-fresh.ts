import State, { ContentInitializationStatus } from "../State";

export default function isContentFresh(state: State): boolean {
  return (
    state.contentInitializationStatus ===
    ContentInitializationStatus.NOT_INITIALIZED
  );
}
