import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

export interface INavLinkProps {
  href: string;
  text: string;
  isActive?: boolean;
}

export default ({ text, href, isActive }: INavLinkProps) => {
  
  const classnames = classNames("nav-link");

  return (
    <li className="nav-item">
      <NavLink className={classnames} to={href}>
        {text}
      </NavLink>
    </li>
  );
};
