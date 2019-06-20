import React from "react";

type Props = {
  text?: string;
};
export default ({ text }: Props) => {
  return <span>{text || "No results were found"}</span>;
};
