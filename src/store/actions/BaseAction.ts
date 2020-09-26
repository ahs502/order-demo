import { Action } from "redux";

import ActionType from "../ActionType";

type BaseAction<T extends ActionType> = Action<T>;

export default BaseAction;
