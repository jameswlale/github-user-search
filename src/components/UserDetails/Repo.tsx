import React from "react";
import { IUserRepos } from "../../types";
import { H3 } from "../Forms/Headers";

type Props = IUserRepos;

export default ({ description, open_issues, full_name, url }: Props) => {
  return (
    <div className="repo">
      <div>
        <a href={url}>
          <H3>{full_name}</H3>
        </a>
      </div>
      <div>
        {description && <p className="repo_descr">{description}</p>}
        <span className="repo_issues">Open issues: {open_issues}</span>
      </div>
    </div>
  );
};
