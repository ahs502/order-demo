import { Store } from "redux";
import { useStore } from "react-redux";

import type State from "../store/State";

//TODO: Improve the Action type:
export default function useTypedStore(): Store<State, any> {
  return useStore<State, any>();
}
