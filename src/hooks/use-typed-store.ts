import { Store } from "redux";
import { useStore } from "react-redux";

import State from "../store/State";
import Action from "../store/Action";

export default function useTypedStore(): Store<State, Action> {
  return useStore();
}
