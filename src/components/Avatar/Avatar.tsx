import React from "react";
import classNames from "classnames";

export interface IStateProps {
  src: string | undefined;
  className?: string;
}

type Props = IStateProps & React.ImgHTMLAttributes<HTMLImageElement>;

export default ({ className, src }: Props) => {
  const classnames = classNames("avatar", className);

  return <img src={src} className={classnames} alt="" />;
};
