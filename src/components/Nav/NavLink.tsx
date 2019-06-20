import React from "react";
import classNames from "classnames";
import { NavLink as Link } from "react-router-dom";

export interface INavLinkProps {
  href: string;
  text: string;
  isActive?: boolean;
}

export default ({ text, href, isActive }: INavLinkProps) => {
  const classnames = classNames("nav-link", {
    test: isActive === true
  });

  return (
    <li className="nav-item">
      <Link className={classnames} to={href} exact={true}>
        {text}
      </Link>
    </li>
  );
};
