import Card from "../../Card";
import BaseCardTransaction from "./BaseCardTransaction";

export default interface InsertCardTransaction
  extends BaseCardTransaction<"insert card"> {
  readonly card: Card;
}
