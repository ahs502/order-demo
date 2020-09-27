import { ThunkAction } from "../Thunk";

import persistent from "../../persistent";

import Page from "../../models/Page";

import pageSelectedAction from "../action-creators/page-selected-action";

export default function selectPage(
  selectedPage: Page
): ThunkAction<Promise<boolean>> {
  return async (dispatch) => {
    try {
      await persistent("selectedPageId").set(selectedPage.id);

      dispatch(pageSelectedAction(selectedPage));

      return true;
    } catch (error) {
      console.error(error);
      alert(error);
      return false;
    }
  };
}
