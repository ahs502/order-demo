import { useSelector } from "react-redux";

import State from "../store/State";

export default function useTypedSelector<T = unknown>(
  selector: (state: State) => T,
  equalityFunction?: (left: T, right: T) => boolean
): T {
  return useSelector<State, T>(selector, equalityFunction);
}
