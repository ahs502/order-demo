import { ThunkAction } from "../Thunk";

import persistent from "../../persistent";

import initializeContentFailed from "../action-creators/initialize-content-failed";
import initializeContentStarted from "../action-creators/initialize-content-started";
import initializeContentSucceeded from "../action-creators/initialize-content-succeeded";

import isContentFresh from "../selectors/is-content-fresh";

export default function initializeContent(): ThunkAction {
  return async (dispatch, getState) => {
    const contentIsFresh = isContentFresh(getState());
    if (!contentIsFresh) return;

    dispatch(initializeContentStarted());

    try {
      const [content, transactions] = await Promise.all([
        persistent("content").get(),
        persistent("transactions").get(),
      ]);

      dispatch(initializeContentSucceeded(content, transactions));
    } catch (error) {
      console.error(error);
      alert(error);
      dispatch(initializeContentFailed(error));
    }
  };
}
