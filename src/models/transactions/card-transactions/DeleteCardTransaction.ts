import BaseCardTransaction from "./BaseCardTransaction";
import CardTransactionType from "./CardTransactionType";

export default interface DeleteCardTransaction
  extends BaseCardTransaction<CardTransactionType.DELETE_CARD> {
  readonly index: number;
}
