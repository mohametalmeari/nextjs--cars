interface Props {
  children: React.ReactNode;
  variant: "ghost" | "primary";
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, variant, onClick, className }: Props) => {
  const cn = {
    ghost: "hover:bg-black/5 rounded-full aspect-square p-1 transition-all-500",
    primary:
      "bg-white text-black px-5 py-2 pb-3 rounded-full hover:bg-opacity-70 transition-all-500",
  };
  return (
    <button className={`${cn[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
