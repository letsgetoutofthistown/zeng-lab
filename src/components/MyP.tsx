import { FC } from "react";

interface MyPProps {
  className?: string;
  children: React.ReactNode;
}
export const MyP: FC<MyPProps> = ({ children, className }: MyPProps) => {
  return <div className={`mb-10 ${className}`}>{children}</div>;
};
