import Card from "../../Card";
import BaseCardTransaction from "./BaseCardTransaction";

export default interface EditCardTransaction
  extends BaseCardTransaction<"edit card"> {
  readonly index: number;
  readonly card: Card;
}
