import React from "react";

export interface IStateProps {
  src?: string;
}

type Props = IStateProps & React.ImgHTMLAttributes<HTMLImageElement>;

export default ({ src, ...props }: Props) => {
  return <img src={src} className="avatar" alt="" {...props} />;
};
