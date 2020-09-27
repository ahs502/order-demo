import ActionType from "../ActionType";
import BaseAction from "./BaseAction";

import Page from "../../models/Page";

export default interface PageSelectedAction
  extends BaseAction<ActionType.PAGE_SELECTED> {
  readonly selectedPage: Page;
}
