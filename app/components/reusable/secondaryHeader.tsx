
import { ReactNode } from "react";

type SecondaryHeaderProps = {
  children: ReactNode;
  className?: string;
};

export default function SecondaryHeader({ children, className = "" }: SecondaryHeaderProps) {
  return (
    <h2 className={`secondary-header ${className}`}>
      {children}
    </h2>
  );
}
