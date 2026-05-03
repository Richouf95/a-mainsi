import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative max-h-260 h-[calc(100dvh-0px)] flex items-end overflow-hidden">
      <Image
        src="/images/a-mansi-hero.png"
        alt="Hero"
        fill
        sizes="100vw"
        priority
        className="object-cover object-[50%_70%]"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 px-10 pb-12 w-full lg:max-w-170 text-white">
        <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-[10px] sm:text-xs uppercase mb-4">
          Laiterie Fromagerie
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-3">
          Le bon goût local
          <br />
          <strong className="text-yellow-300 font-pumpkin">A mansi</strong>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 max-w-105">
          Transformation et commercialisation de produits laitiers nigériens
          100% naturels, directement issus des éleveurs locaux.
        </p>

        <div className="flex gap-3 flex-wrap sm:flex-nowrap">
          <Link
            href="/produits"
            className="w-full md:w-1/2 bg-white/75 text-black rounded-lg px-6 py-3 text-[13px] text-center transition-all duration-200 hover:bg-white active:scale-95"
          >
            Découvrir nos produits
          </Link>
          <Link
            href="/proxilait"
            className="w-full md:w-1/2 bg-[#7B1C1C]/75 text-white rounded-lg px-6 py-3 text-[13px] text-center transition-all duration-200 hover:bg-[#7B1C1C] active:scale-95"
          >
            Découvrir Proxilait
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="flex items-center justify-center md:justify-end text-xs sm:text-sm md:text-base text-white/70 text-center md:text-right">
            Disponible bientôt sur
          </div>
          <div className="flex justify-center items-center gap-3 w-full">
            <div className="w-full flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-3 py-2 rounded-lg">
              <div className="relative w-6 h-6 shrink-0">
                <Image src="/images/appstore.png" alt="App Store" fill sizes="24px" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[9px] text-white/60">Download on</span>
                <span className="text-xs text-white font-medium">App Store</span>
              </div>
            </div>
            <div className="w-full flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-3 py-2 rounded-lg">
              <div className="relative w-6 h-6 shrink-0">
                <Image src="/images/play-store.png" alt="Google Play" fill sizes="24px" className="object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[9px] text-white/60">Get it on</span>
                <span className="text-xs text-white font-medium">Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats desktop */}
      <div className="hidden lg:flex absolute right-10 bottom-12 z-10 flex-col gap-3">
        {[
          { val: "20+", label: "Fournisseurs", bold: true },
          { val: "8", label: "Produits dérivés", bold: false },
          { val: "100%", label: "Lait local", bold: false },
        ].map((s) => (
          <div key={s.label} className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-5 py-3 text-center shadow-lg w-52">
            <div className={`text-yellow-300 leading-none ${s.bold ? "text-2xl font-bold" : "text-xl font-semibold"}`}>
              {s.val}
            </div>
            <div className="text-xs text-white/90 mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Stats mobile */}
      <div className="lg:hidden absolute top-20 right-4 z-10 flex flex-col gap-2">
        {[
          { val: "20+", label: "Fournisseurs" },
          { val: "8", label: "Produits" },
          { val: "100%", label: "Local" },
        ].map((s) => (
          <div key={s.label} className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1 text-center">
            <span className="text-yellow-300 text-sm font-bold">{s.val}</span>
            <span className="text-[10px] text-white/90 ml-1">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
