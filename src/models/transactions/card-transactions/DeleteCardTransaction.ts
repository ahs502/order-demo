import BaseCardTransaction from "./BaseCardTransaction";

export default interface DeleteCardTransaction
  extends BaseCardTransaction<"delete card"> {
  readonly index: number;
}
