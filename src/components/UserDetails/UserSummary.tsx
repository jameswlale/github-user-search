import React from "react";
import { H3 } from "../Forms/Headers";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { IUserDetail } from "../../types";
import { IComponentProps } from "../interfaces";
import NoData from "../NoData/NoData";

export interface IStateProps {
  userDetails?: IUserDetail;
  isLoading: boolean;
}

type Props = IStateProps & IComponentProps;

export default ({ error, userDetails, isLoading }: Props) => {
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!userDetails) {
    return <NoData />;
  }

  const { name, login } = userDetails;

  return (
    <H3>
      {name} <small>({login})</small>
    </H3>
  );
};
