import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-300";
  const variants = {
    primary:
      "bg-indigo-500 text-white hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/25",
    secondary:
      "border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
