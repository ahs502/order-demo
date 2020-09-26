import type BaseCardTransaction from "./BaseCardTransaction";
import type CardTransactionType from "./CardTransactionType";

import type Card from "../../Card";

export default interface InsertCardTransaction
  extends BaseCardTransaction<CardTransactionType.INSERT_CARD> {
  readonly card: Card;
}
