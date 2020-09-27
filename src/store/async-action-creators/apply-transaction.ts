import { ThunkAction } from "../Thunk";

import persistent from "../../persistent";

import Transaction from "../../models/Transaction";

import applyTransactionStartedAction from "../action-creators/apply-transaction-started-action";
import applyTransactionSucceededAction from "../action-creators/apply-transaction-succeeded-action";
import applyTransactionFailedAction from "../action-creators/apply-transaction-failed-action";

export default function applyTransaction(
  transaction: Transaction
): ThunkAction {
  return async (dispatch) => {
    dispatch(applyTransactionStartedAction(transaction));

    try {
      const transactions = await persistent("transactions").get();
      const newTransactions = [...(transactions || []), transaction];
      await persistent("transactions").set(newTransactions);

      dispatch(applyTransactionSucceededAction());
    } catch (error) {
      console.error(error);
      alert(error);
      dispatch(applyTransactionFailedAction(error));
    }
  };
}
