interface Props {
  children: React.ReactNode;
  variant: "ghost";
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, variant, onClick, className }: Props) => {
  const cn = {
    ghost: "hover:bg-black/5 rounded-full aspect-square p-1 transition-all-500",
  };
  return (
    <button className={`${cn[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
