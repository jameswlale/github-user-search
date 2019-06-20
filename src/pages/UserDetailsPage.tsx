import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import DefaultTemplate from "../templates/DefaultTemplate";
import Avatar from "../components/Avatar/AvatarContainer";
import UserDetails from "../components/UserDetails/UserDetailsContainer";
import { getUser, getRepos } from "../store/actions/user.actions";
import { ReduxDispatch } from "../store";
import UserOrgs from "../components/UserDetails/UserOrgsContainer";
import UserRepos from "../components/UserDetails/UserReposContainer";
import Nav from "../components/Nav/Nav";
import NavLink from "../components/Nav/NavLink";
import UserSummary from "../components/UserDetails/UserSummaryContainer";

interface IDispatchProps {
  onInitUserDetails: (username: string) => void;
  onInitRepos: (username: string) => void;
}

type Props = {
  username: string;
} & IDispatchProps;

const UserDetailsPage = ({
  match,
  onInitRepos,
  onInitUserDetails
}: Props & RouteComponentProps<Props>) => {
  const { username } = match.params;
  const { url } = match;

  useEffect(() => {
    const section = url.endsWith("/repos") ? "repos" : "user";

    if (section === "user") {
      onInitUserDetails(match.params.username);
    } else {
      onInitUserDetails(match.params.username);
      onInitRepos(match.params.username);
    }
  }, [match.params.username, url, onInitUserDetails, onInitRepos]);

  const isActive = (href: string) => url === href;

  return (
    <DefaultTemplate>
      <div className="row">
        <div className="col-4 avatar_col">
          <Avatar />
        </div>
        <div className="col-8">
          <UserSummary />
          <Nav>
            <NavLink
              href={`/users/${username}`}
              text="User"
              isActive={isActive(`/users/${username}`)}
            />
            <NavLink
              href={`/users/${username}/orgs`}
              text="Orgs"
              isActive={isActive(`/users/${username}/orgs`)}
            />
            <NavLink
              href={`/users/${username}/repos`}
              text="Repositories"
              isActive={isActive(`/users/${username}/repos`)}
            />
          </Nav>
          <div className="content">
            {url.endsWith(username) && <UserDetails />}
            {url.endsWith("/orgs") && <UserOrgs />}
            {url.endsWith("/repos") && <UserRepos />}
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
};

function mapDispatchToProps(dispatch: ReduxDispatch): IDispatchProps {
  return {
    onInitUserDetails: (username: string) => dispatch(getUser(username)),
    onInitRepos: (username: string) => dispatch(getRepos(username))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(UserDetailsPage);
