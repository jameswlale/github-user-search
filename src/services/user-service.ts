import { getRepos, getUserData } from "../clients/github-api";

export const getUserFromGithub = (username: string) => {
  return getUserData(username);
};

export const getReposForUserFromGithub = (username: string) => {
  return getRepos(username);
};
