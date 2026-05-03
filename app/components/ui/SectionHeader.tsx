type SectionHeaderProps = {
  overline: string;
  title: string;
  subtitle?: string;
  /** Alignement du texte (default: gauche) */
  center?: boolean;
};

export default function SectionHeader({
  overline,
  title,
  subtitle,
  center = false,
}: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
        {overline}
      </div>
      <h2 className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[14px] text-[#7a5a4a] mt-3 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
