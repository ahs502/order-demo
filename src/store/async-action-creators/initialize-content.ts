import generateDummyData from "../../helpers/generate-dummy-data";
import initializeContentFailed from "../action-creators/initialize-content-failed";
import initializeContentRequested from "../action-creators/initialize-content-requested";
import initializeContentSucceeded from "../action-creators/initialize-content-succeeded";
import isContentNotInitialized from "../selectors/is-content-not-initialized";
import type ThunkAction from "../ThunkAction";

export default function initializeContent(): ThunkAction {
  return async (dispatch, getState) => {
    const contentIsNotInitialized = isContentNotInitialized(getState());
    if (!contentIsNotInitialized) return;

    dispatch(initializeContentRequested());

    try {
      //TODO: Read content from local storage.

      dispatch(
        initializeContentSucceeded(generateDummyData(), generateDummyData())
      );
    } catch (error) {
      dispatch(initializeContentFailed(error));
    }
  };
}
