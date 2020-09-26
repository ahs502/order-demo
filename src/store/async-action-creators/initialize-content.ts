import type { ThunkAction } from "../Thunk";

import persistent from "../../persistent";

import initializeContentFailed from "../action-creators/initialize-content-failed";
import initializeContentRequested from "../action-creators/initialize-content-requested";
import initializeContentSucceeded from "../action-creators/initialize-content-succeeded";
import isContentNotInitialized from "../selectors/is-content-not-initialized";

export default function initializeContent(): ThunkAction {
  return async (dispatch, getState) => {
    const contentIsNotInitialized = isContentNotInitialized(getState());
    if (!contentIsNotInitialized) return;

    dispatch(initializeContentRequested());

    try {
      const [content, transactions] = await Promise.all([
        persistent("content").get(),
        persistent("transactions").get(),
      ]);

      dispatch(initializeContentSucceeded(content, transactions));
    } catch (error) {
      dispatch(initializeContentFailed(error));
    }
  };
}
