import React from "react";
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

  const { bio, company, followers, following } = userDetails;

  return (
    <div>
      {bio && <p>{bio}</p>}
      <ul>
        <li>Company: {company}</li>
        <li>Followers: {followers}</li>
        <li>Following: {following}</li>
      </ul>
    </div>
  );
};
