import Content from "../../models/Content";
import State from "../State";

export default function getContent(state: State): Content {
  return state.content;
}
