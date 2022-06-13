import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Content: React.FC<Props> = ({ children, className }) => {
  return <main className={className}>{children}</main>;
};

export default Content;
