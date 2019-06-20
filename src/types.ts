export interface IUserDetail {
  bio: string | null;
  login: string;
  id: string;
  avatar_url: string;
  name: string;
  company: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  orgs: IUserOrgs[];
}

export interface IUserOrgs {
  login: string;
  id: string;
  url: string;
  description: string;
  avatar_url: string;
}

export interface IUserRepos {
  full_name: string;
  description: string;
  url: string;
  open_issues: number;
}
