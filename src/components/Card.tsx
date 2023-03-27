interface CardProps {
  children: React.ReactNode;
  className?: string;
}
export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`bg-white md:w-11/12 flex flex-col items-center md:min-h-screen py-14 mb-20 ${className}`}
    >
      {children}
    </div>
  );
};
