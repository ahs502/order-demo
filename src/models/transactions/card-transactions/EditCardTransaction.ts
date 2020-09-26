import BaseCardTransaction from "./BaseCardTransaction";
import CardTransactionType from "./CardTransactionType";

import Card from "../../Card";

export default interface EditCardTransaction
  extends BaseCardTransaction<CardTransactionType.EDIT_CARD> {
  readonly index: number;
  readonly card: Card;
}
