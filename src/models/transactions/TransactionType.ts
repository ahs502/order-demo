import MergeEnums from "../../helpers/MergeEnums";
import CardTransactionType from "./card-transactions/CardTransactionType";

const TransactionType = {
  CardTransactionType,
  /* , OtherTransactionType will be listed here. */
};

type TransactionType = MergeEnums<typeof TransactionType>;

export default TransactionType;
