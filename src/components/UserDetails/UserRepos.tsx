import React from "react";
import { IUserRepos } from "../../types";
import Loading from "../Loading/Loading";
import Repo from "./Repo";
import Error from "../Error/Error";
import { IComponentProps } from "../interfaces";
import NoData from "../NoData/NoData";

export interface IStateProps extends IComponentProps {
  repos?: IUserRepos[];
}

type Props = IStateProps;

export default ({ error, isLoading, repos }: Props) => {
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!repos || repos.length < 1) {
    return <NoData />;
  }

  return (
    <div>
      {repos.map(repo => {
        return <Repo key={repo.url} {...repo} />;
      })}
    </div>
  );
};
