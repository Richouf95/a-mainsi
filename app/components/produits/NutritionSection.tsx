"use client";

import { motion } from "motion/react";
import type { Product } from "@/app/produits/data";

type Row = { label: string; value: string; sub?: boolean };

function buildRows(vn: Product["valeurs_nutritionnelles"]): Row[] {
  const rows: Row[] = [];
  if (vn.calories)   rows.push({ label: "Calories",           value: vn.calories });
  if (vn.proteines)  rows.push({ label: "Protéines",          value: vn.proteines });
  if (vn.lipides?.total)    rows.push({ label: "Lipides",     value: vn.lipides.total });
  if (vn.lipides?.satures)  rows.push({ label: "dont Acides gras saturés", value: vn.lipides.satures, sub: true });
  if (vn.glucides)   rows.push({ label: "Glucides",           value: vn.glucides });
  if (vn.sucres)     rows.push({ label: "dont Sucres",        value: vn.sucres, sub: true });
  if (vn.fibres && vn.fibres !== "0g") rows.push({ label: "Fibres alimentaires", value: vn.fibres });
  if (vn.sodium)     rows.push({ label: "Sodium",             value: vn.sodium });
  if (vn.calcium)    rows.push({ label: "Calcium",            value: vn.calcium });
  if (vn.fer)        rows.push({ label: "Fer",                value: vn.fer });
  if (vn.vitamine_A) rows.push({ label: "Vitamine A",         value: vn.vitamine_A });
  if (vn.vitamine_D) rows.push({ label: "Vitamine D",         value: vn.vitamine_D });
  return rows;
}

export default function NutritionSection({ prod }: { prod: Product }) {
  const rows = buildRows(prod.valeurs_nutritionnelles);
  const hasData = rows.length > 0 || (prod.valeurs_nutritionnelles.vitamines?.length ?? 0) > 0;

  return (
    <section className="bg-[#F5F0E8] py-14 px-8 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row gap-10 md:gap-16"
      >
        {/* En-tête */}
        <div className="md:w-96 shrink-0">
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
            Composition
          </div>
          <h2 className="font-serif text-[24px] text-[#7B1C1C] leading-snug mb-4">
            Valeurs nutritionnelles
          </h2>
          <p className="text-[12px] text-[#7a5a4a] leading-relaxed">
            Pour{" "}
            <span className="font-medium text-[#7B1C1C]">
              {prod.valeurs_nutritionnelles.pour}
            </span>{" "}
            de produit.
          </p>

          {/* Ingrédients */}
          <div className="mt-8">
            <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
              Ingrédients
            </div>
            <p className="text-[12px] text-[#5a3a2a] leading-relaxed">{prod.ingredients}</p>
          </div>

          {/* Emballage */}
          <div className="mt-6">
            <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
              Emballage
            </div>
            <p className="text-[12px] text-[#5a3a2a]">{prod.forme_emballage}</p>
          </div>
        </div>

        {/* Tableau + vitamines */}
        <div className="flex-1">
          {hasData ? (
            <>
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(123,28,28,0.05)]">
                {rows.map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className={`flex items-center justify-between px-6 py-3 border-b border-[#7B1C1C]/6 last:border-b-0 ${
                      row.sub ? "bg-[#F5F0E8]/40" : ""
                    }`}
                  >
                    <span
                      className={`text-[13px] text-[#5a3a2a] ${
                        row.sub ? "pl-4 text-[12px] text-[#7a5a4a]" : "font-medium"
                      }`}
                    >
                      {row.label}
                    </span>
                    <span className="text-[13px] font-semibold text-[#7B1C1C] tabular-nums">
                      {row.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Vitamines */}
              {prod.valeurs_nutritionnelles.vitamines && prod.valeurs_nutritionnelles.vitamines.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mt-5"
                >
                  <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-3">
                    Vitamines présentes
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {prod.valeurs_nutritionnelles.vitamines.map((v) => (
                      <span
                        key={v}
                        className="bg-white border border-[#7B1C1C]/12 text-[#7B1C1C] text-[12px] font-medium px-3 py-1 rounded-full shadow-[0_1px_4px_rgba(123,28,28,0.06)]"
                      >
                        Vit. {v}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            <div className="bg-white rounded-2xl px-6 py-8 text-center shadow-[0_2px_16px_rgba(123,28,28,0.05)]">
              <p className="text-[13px] text-[#7a5a4a]">
                Valeurs nutritionnelles en cours d'analyse.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
