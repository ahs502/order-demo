import { Store } from "redux";
import { useStore } from "react-redux";

import type State from "../store/State";
import type Action from "../store/Action";

export default function useTypedStore(): Store<State, Action> {
  return useStore();
}
