import Content from "../models/Content";
import Transaction from "../models/Transaction";
import User from "../models/User";

export default interface Persistent {
  user: User;
  content: Content;
  transactions: readonly Transaction[];
  selectedPageId: Id;
}
