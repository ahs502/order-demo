import { ThunkAction } from "../Thunk";

import persistent from "../../persistent";

import initializeContentFailedAction from "../action-creators/initialize-content-failed-action";
import initializeContentStartedAction from "../action-creators/initialize-content-started-action";
import initializeContentSucceededAction from "../action-creators/initialize-content-succeeded-action";

import isContentFresh from "../selectors/is-content-fresh";

export default function initializeContent(): ThunkAction {
  return async (dispatch, getState) => {
    const contentIsFresh = isContentFresh(getState());
    if (!contentIsFresh) return;

    dispatch(initializeContentStartedAction());

    try {
      const [content, transactions, selectedPageId] = await Promise.all([
        persistent("content").get(),
        persistent("transactions").get(),
        persistent("selectedPageId").get(),
      ]);

      dispatch(
        initializeContentSucceededAction(content, transactions, selectedPageId)
      );
    } catch (error) {
      console.error(error);
      alert(error);
      dispatch(initializeContentFailedAction(error));
    }
  };
}
