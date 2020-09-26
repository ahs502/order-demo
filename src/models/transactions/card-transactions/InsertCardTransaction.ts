import BaseCardTransaction from "./BaseCardTransaction";
import CardTransactionType from "./CardTransactionType";

import Card from "../../Card";

export default interface InsertCardTransaction
  extends BaseCardTransaction<CardTransactionType.INSERT_CARD> {
  readonly card: Card;
}
