const categories = [
  { label: "Yaourts", href: "#yaourts" },
  { label: "Fromages secs", href: "#fromages-secs" },
  { label: "Fromages frais", href: "#fromages-frais" },
  { label: "Beurres", href: "#beurres" },
];

export default function CategoriesNav() {
  return (
    <div className="bg-white border-b border-[#7B1C1C]/10 sticky top-14 z-40">
      <div className="flex gap-0 overflow-x-auto scrollbar-none px-8 md:px-10">
        {categories.map((cat) => (
          <a
            key={cat.label}
            href={cat.href}
            className="shrink-0 px-5 py-3.5 text-[12px] font-medium text-[#7B1C1C]/60 hover:text-[#7B1C1C] border-b-2 border-transparent hover:border-[#7B1C1C] transition-all whitespace-nowrap"
          >
            {cat.label}
          </a>
        ))}
      </div>
    </div>
  );
}
