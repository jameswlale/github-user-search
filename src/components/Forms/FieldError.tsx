import React from "react";

type Props = {
  text: string;
};

export default (props: Props) => {
  return <span className="field-error">{props.text}</span>;
};
