import { Action } from "redux";

import type ActionType from "../ActionType";

type BaseAction<T extends ActionType> = Action<T>;

export default BaseAction;
