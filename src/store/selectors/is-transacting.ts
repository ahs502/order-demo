import State from "../State";

export default function isTransacting(state: State): boolean {
  return !!state.applyingTransaction;
}
