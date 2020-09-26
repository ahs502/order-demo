import type BaseCardTransaction from "./BaseCardTransaction";
import type CardTransactionType from "./CardTransactionType";

import type Card from "../../Card";

export default interface EditCardTransaction
  extends BaseCardTransaction<CardTransactionType.EDIT_CARD> {
  readonly index: number;
  readonly card: Card;
}
