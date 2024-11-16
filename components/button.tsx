import Link from "next/link";

interface BaseProps {
  children: React.ReactNode;
  variant: "ghost" | "primary" | "secondary" | "small";
  className?: string;
}

interface LinkProps extends BaseProps {
  href?: string;
  onClick?: never;
}

interface ButtonProps extends BaseProps {
  onClick?: () => void;
  href?: never;
}

type Props = LinkProps | ButtonProps;

export const Button = ({
  children,
  variant,
  onClick,
  className,
  href,
}: Props) => {
  const cn = {
    ghost: "hover:bg-black/5 rounded-full aspect-square p-1 transition-all-500",
    primary:
      "bg-white text-black px-5 py-2 pb-3 rounded-full hover:bg-opacity-70 transition-all-500",
    secondary:
      "bg-primary text-white font-semibold px-5 py-2 pb-3 rounded-full hover:bg-opacity-90 transition-all-500",
    small:
      "bg-white ring-2 ring-black/70 text-black hover:bg-opacity-70 rounded-md px-1 transition-all-500",
  };

  if (href && onClick) {
    throw new Error("Button cannot have both href and onClick props");
  }

  if (href) {
    return (
      <Link className={`${cn[variant]} ${className} text-center`} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${cn[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
