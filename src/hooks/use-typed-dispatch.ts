import { useDispatch } from "react-redux";

import { ThunkDispatch } from "../store/Thunk";

export default function useTypedDispatch(): ThunkDispatch {
  return useDispatch();
}
