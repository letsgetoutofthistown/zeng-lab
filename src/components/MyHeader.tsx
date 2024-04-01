import { FC } from "react";

interface MyHeaderProps {
  children: React.ReactNode;
}
export const MyHeader: FC<MyHeaderProps> = ({ children }: MyHeaderProps) => {
  return <div className="md:text-5xl text-3xl mb-10">{children}</div>;
};
