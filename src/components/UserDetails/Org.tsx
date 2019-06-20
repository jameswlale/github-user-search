import React from "react";
import Avatar from "../Avatar/Avatar";
import { H3 } from "../Forms/Headers";
import { IUserOrgs } from "../../types";

type Props = {
  login: string;
  url: string;
  avatar_url: string;
};

export default ({ login, url, avatar_url }: Props) => {
  return (
    <div className="org row">
      <div className="col-auto">
        <Avatar src={avatar_url} className="org__avatar" />
      </div>
      <div className="col-10">
        <a href={url}>
          <H3>{login}</H3>
        </a>
        <a href={url} className="org_url">{url}</a>
      </div>
    </div>
  );
};
