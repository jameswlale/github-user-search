import React from "react";

type Props = {
  children: React.ReactNode;
};

export default (props: Props) => {
  return <div>{props.children}</div>;
};
