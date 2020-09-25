import { Store } from "redux";
import { useStore } from "react-redux";

import State from "../models/State";

//TODO: Improve the Action type:
export default function useTypedStore(): Store<State, any> {
  return useStore<State, any>();
}
