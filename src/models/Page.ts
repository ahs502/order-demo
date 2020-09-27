import Card from "./Card";
import User from "./User";

export default interface Page {
  readonly id: Id;
  readonly name: string;
  readonly owner: User;
  readonly members: readonly User[];
  readonly cards: readonly Card[];
}
