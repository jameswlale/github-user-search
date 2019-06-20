import React from "react";

type Props = {
  children: React.ReactNode;
};

export const H1 = ({ children }: Props) => <h1>{children}</h1>;

export const H2 = ({ children }: Props) => <h2>{children}</h2>;

export const H3 = ({ children }: Props) => <h3>{children}</h3>;
