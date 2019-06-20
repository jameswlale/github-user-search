import React from "react"; 
import Org from "./Org";
import { IUserOrgs } from "../../types";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { IComponentProps } from "../interfaces";
import NoData from "../NoData/NoData";

export interface IStateProps extends IComponentProps {
  orgs: IUserOrgs[] | undefined;
}

type Props = IStateProps;

export default ({ error, orgs, isLoading }: Props) => {
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!orgs || orgs.length < 0) {
    return <NoData />;
  }

  return (
    <div>
      {orgs.map(org => {
        return <Org key={org.id} {...org} />;
      })}
    </div>
  );
};
