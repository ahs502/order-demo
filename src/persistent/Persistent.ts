import Content from "../models/Content";
import Transaction from "../models/Transaction";

export default interface Persistent {
  content: Content;
  transactions: readonly Transaction[];
  selectedPageId: Id;
}
