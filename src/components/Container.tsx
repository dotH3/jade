import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div
      className={
        `p-3 rounded-md border-white/10 border gap-2 flex flex-col ` + className
      }
    >
      {children}
    </div>
  );
};
