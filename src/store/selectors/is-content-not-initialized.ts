import type State from "../State";

export default function isContentNotInitialized(state: State): boolean {
  return state.contentInitializationStatus === "not initialized";
}
