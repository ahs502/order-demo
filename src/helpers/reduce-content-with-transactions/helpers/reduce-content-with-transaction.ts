import Content from "../../../models/Content";
import Transaction from "../../../models/Transaction";

import TransactionType from "../../../models/transactions/TransactionType";

import reduceContentWithInsertCardTransaction from "./reduce-content-with-insert-card-transaction";
import reduceContentWithEditCardTransaction from "./reduce-content-with-edit-card-transaction";
import reduceContentWithDeleteCardTransaction from "./reduce-content-with-delete-card-transaction";

export default function reduceContentWithTransaction(
  content: Content,
  transaction: Transaction
): Content {
  switch (transaction.type) {
    case TransactionType.CardTransactionType.INSERT_CARD:
      return reduceContentWithInsertCardTransaction(content, transaction);

    case TransactionType.CardTransactionType.EDIT_CARD:
      return reduceContentWithEditCardTransaction(content, transaction);

    case TransactionType.CardTransactionType.DELETE_CARD:
      return reduceContentWithDeleteCardTransaction(content, transaction);

    default:
      return content;
  }
}
