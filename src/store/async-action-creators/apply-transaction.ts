import { ThunkAction } from "../Thunk";

import Transaction from "../../models/Transaction";

import applyTransactionStarted from "../action-creators/apply-transaction-started";
import applyTransactionSucceeded from "../action-creators/apply-transaction-succeeded";
import applyTransactionFailed from "../action-creators/apply-transaction-failed";
import persistent from "../../persistent";

export default function applyTransaction(
  transaction: Transaction
): ThunkAction {
  return async (dispatch) => {
    dispatch(applyTransactionStarted(transaction));

    try {
      const transactions = await persistent("transactions").get();
      const newTransactions = [...(transactions || []), transaction];
      await persistent("transactions").set(newTransactions);

      dispatch(applyTransactionSucceeded());
    } catch (error) {
      console.error(error);
      alert(error);
      dispatch(applyTransactionFailed(error));
    }
  };
}
