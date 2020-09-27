import Page from "../../models/Page";
import State from "../State";

export default function getAllPages(state: State): readonly Page[] {
  return state.content.pages;
}
