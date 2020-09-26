import Content from "../../models/Content";
import Transaction from "../../models/Transaction";

import reduceContentWithTransaction from "./helpers/reduce-content-with-transaction";

export default function reduceContentWithTransactions(
  content: Content,
  transactions: readonly Transaction[]
): Content {
  return transactions.reduce(
    (content, transaction) =>
      reduceContentWithTransaction(content, transaction),
    content
  );
}
