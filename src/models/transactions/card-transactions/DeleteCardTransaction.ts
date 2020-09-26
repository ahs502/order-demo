import type BaseCardTransaction from "./BaseCardTransaction";
import type CardTransactionType from "./CardTransactionType";

export default interface DeleteCardTransaction
  extends BaseCardTransaction<CardTransactionType.DELETE_CARD> {
  readonly index: number;
}
