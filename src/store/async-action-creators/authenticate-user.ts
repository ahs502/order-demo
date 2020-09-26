import User from "../../models/User";
import authenticateUserRequested from "../action-creators/authenticate-user-requested";
import authenticateUserSucceeded from "../action-creators/authenticate-user-succeeded";
import { ThunkAction } from "../Thunk";

export default function authenticateUser(): ThunkAction<Promise<User>> {
  return async (dispatch) => {
    dispatch(authenticateUserRequested());

    // Authentication is out of the scope of this assignment.
    const currentUser = await Promise.resolve<User>({
      id: "user-id-12345",
      name: "Hessamoddin A Shokravi",
    });

    dispatch(authenticateUserSucceeded(currentUser));

    return currentUser;
  };
}
