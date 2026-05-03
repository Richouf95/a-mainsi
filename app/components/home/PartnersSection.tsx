const partners = [
  { initials: "ME", label: "Ministère de l'Élevage", type: "Gouvernement", color: "#7B1C1C" },
  { initials: "FAO", label: "FAO Niger", type: "Organisation internationale", color: "#2E6B3E" },
  { initials: "AR", label: "AREN", type: "Réseau éleveurs", color: "#C26010" },
  { initials: "CA", label: "Chambre d'Agriculture", type: "Institution", color: "#5A3A2A" },
  { initials: "UN", label: "PNUD Niger", type: "Nations Unies", color: "#1A5276" },
];

const marqueePartners = [...partners, ...partners, ...partners, ...partners];

export default function PartnersSection() {
  return (
    <section className="bg-white py-14 overflow-hidden">
      <div className="flex items-end justify-between px-6 md:px-10 mb-10">
        <h2 className="font-serif text-[28px] text-[#7B1C1C] leading-tight">
          Ils nous font confiance
        </h2>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 100px, black calc(100% - 100px), transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 100px, black calc(100% - 100px), transparent 100%)",
        }}
      >
        <div className="flex w-max gap-4 py-4 marquee-track">
          {marqueePartners.map((p, i) => (
            <div
              key={i}
              className="w-44 shrink-0 rounded-[20px] overflow-hidden border border-[#7B1C1C]/8 bg-white shadow-[0_2px_10px_rgba(123,28,28,0.05),0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_48px_rgba(123,28,28,0.12),0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-200 cursor-pointer"
            >
              <div
                className="w-full h-28 flex items-center justify-center relative"
                style={{ background: p.color }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 14px)",
                  }}
                />
                <span className="relative z-10 text-[20px] font-semibold text-white/90 tracking-wide">
                  {p.initials}
                </span>
              </div>
              <div className="px-3.5 py-3 border-t border-[#7B1C1C]/6">
                <p className="text-[11px] font-medium text-[#3A1A0A] leading-snug">{p.label}</p>
                <p className="text-[10px] text-[#b09080] mt-0.5 tracking-wide">{p.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
