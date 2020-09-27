import Page from "../../models/Page";
import State from "../State";

export default function getSelectedPage(state: State): Page {
  return state.selectedPage;
}
