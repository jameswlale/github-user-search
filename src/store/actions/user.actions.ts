import { userConstants } from "../constants";
import { ReduxAction } from "..";
import {
  getReposForUserFromGithub,
  getUserFromGithub
} from "../../services/user-service";
import { IUserDetail, IUserOrgs } from "../../types";

interface GetUserRequestAction {
  type: userConstants.GET_USER_REQUEST;
  username: string;
}

interface GetUserSuccessAction {
  type: userConstants.GET_USER_SUCCESS;
  user: IUserDetail;
}

interface GetUserErrorAction {
  type: userConstants.GET_USER_ERROR;
  error: string;
}

interface GetRepoRequestAction {
  type: userConstants.GET_REPO_REQUEST;
  username: string;
}

interface GetRepoSuccessAction {
  type: userConstants.GET_REPO_SUCCESS;
  repos: any;
}

interface GetRepoErrorAction {
  type: userConstants.GET_REPO_ERROR;
  error: string;
}

export type UserAction =
  | GetUserRequestAction
  | GetUserSuccessAction
  | GetUserErrorAction
  | GetRepoRequestAction
  | GetRepoSuccessAction
  | GetRepoErrorAction;

export const getUser = (username: string): ReduxAction => dispatch => {
  dispatch(request(username));

  getUserFromGithub(username)
    .then(({ user, orgs }: { user: IUserDetail; orgs: IUserOrgs[] }) => {
      user.orgs = orgs;
      dispatch(success(user));
    })
    .catch(() => {
      dispatch(failure("Could not fetch user"));
    });

  function request(username: string): UserAction {
    return { type: userConstants.GET_USER_REQUEST, username };
  }
  function success(user: IUserDetail): UserAction {
    return { type: userConstants.GET_USER_SUCCESS, user };
  }
  function failure(error: string): UserAction {
    return { type: userConstants.GET_USER_ERROR, error };
  }
};

export const getRepos = (username: string): ReduxAction => dispatch => {
  dispatch(request(username));

  getReposForUserFromGithub(username)
    .then(data => {
      dispatch(success(data));
    })
    .catch(() => {
      dispatch(failure("Could not fetch repos"));
    });

  function request(username: string): UserAction {
    return { type: userConstants.GET_REPO_REQUEST, username };
  }

  function success(repos: any): UserAction {
    return { type: userConstants.GET_REPO_SUCCESS, repos };
  }

  function failure(error: string): UserAction {
    return { type: userConstants.GET_REPO_ERROR, error };
  }
};
