import type BaseTransaction from "../BaseTransaction";
import type CardTransactionType from "./CardTransactionType";

export default interface BaseCardTransaction<T extends CardTransactionType>
  extends BaseTransaction<T> {
  readonly pageId: Id;
}
