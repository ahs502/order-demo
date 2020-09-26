import type Content from "../models/Content";
import type Transaction from "../models/Transaction";
import type User from "../models/User";

export default interface Persistent {
  user: User;
  content: Content;
  transactions: readonly Transaction[];
}
