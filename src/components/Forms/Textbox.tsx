import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default (props: Props) => {
  return <input type="text" {...props} />;
};
