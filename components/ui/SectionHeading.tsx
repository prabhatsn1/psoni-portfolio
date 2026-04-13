interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: Props) {
  return (
    <div className={`mb-16 ${className}`}>
      <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">{subtitle}</p>
      )}
    </div>
  );
}
