import BaseTransaction from "../BaseTransaction";

export const cardTransactionTypes = [
  "insert card",
  "edit card",
  "delete card",
] as const;

export type CardTransactionType = typeof cardTransactionTypes[number];

export default interface BaseCardTransaction<T extends CardTransactionType>
  extends BaseTransaction<T> {
  readonly pageId: Id;
}
