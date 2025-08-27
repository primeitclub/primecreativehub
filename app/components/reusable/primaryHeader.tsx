import { ReactNode } from "react";

type PrimaryHeaderProps = {
  children: ReactNode;
  className?: string;
};

export default function PrimaryHeader({ children, className = "" }: PrimaryHeaderProps) {
  return (
    <h1 className={`primary-header ${className}`}>
      {children}
    </h1>
  );
}
