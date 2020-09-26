import MergeEnums from "../../helpers/MergeEnums";
import CardTransactionType from "./card-transactions/CardTransactionType";

const TransactionType = { CardTransactionType };

type TransactionType = MergeEnums<typeof TransactionType>;

export default TransactionType;
