import React from "react";
import NavLink, { INavLinkProps } from "./NavLink";

export interface INavLink {
  href: string;
  text: string;
  isActive: boolean;
}

type Props = {
  links?: INavLink[];
  children?: React.ReactElement<INavLinkProps>[];
};

export default (props: Props) => {
  if (!props.children && !props.links) {
    return null;
  }
  return (
    <ul className="nav nav-tabs">
      <>
        {props.children ||
          props.links!.map(l => <NavLink key={l.href} {...l} />)}
      </>
    </ul>
  );
};
