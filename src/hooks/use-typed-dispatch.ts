import { useDispatch } from "react-redux";

import type { ThunkDispatch } from "../store/Thunk";

export default function useTypedDispatch(): ThunkDispatch {
  return useDispatch();
}
