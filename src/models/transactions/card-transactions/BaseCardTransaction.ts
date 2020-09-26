import BaseTransaction from "../BaseTransaction";
import CardTransactionType from "./CardTransactionType";

export default interface BaseCardTransaction<T extends CardTransactionType>
  extends BaseTransaction<T> {
  readonly pageId: Id;
}
