import BaseCard from "./BaseCard";
import CardType from "./CardType";

export default interface ToDoCard extends BaseCard<CardType.TODO> {
  readonly label: string;
  readonly checked: boolean;
  readonly deadline: number;
}
