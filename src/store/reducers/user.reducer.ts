import { userConstants } from "../constants";
import { UserAction } from "../actions/user.actions";
import { IUserDetail } from "../../types";

type State = {
  username?: string;
  userDetails?: IUserDetail;
  error?: string;
  isFetching: boolean;
  repos?: [];
};

const initialState: State = {
  isFetching: false
};

export function userReducer(
  state: State = initialState,
  action: UserAction
): State {
  switch (action.type) {
    case userConstants.GET_USER_REQUEST:
      return {
        ...state,
        error: undefined,
        username: action.username,
        isFetching: true
      };
    case userConstants.GET_USER_SUCCESS:
      return {
        ...state,
        error: undefined,
        userDetails: action.user,
        isFetching: false
      };
    case userConstants.GET_USER_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    case userConstants.GET_REPO_REQUEST:
      return {
        ...state,
        error: undefined,
        username: action.username,
        isFetching: true
      };
    case userConstants.GET_REPO_SUCCESS:
      return {
        ...state,
        error: undefined,
        repos: action.repos,
        isFetching: false
      };
    case userConstants.GET_REPO_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    default:
      return state;
  }
}
