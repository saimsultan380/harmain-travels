"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Canonical } from "@/components/SEO/Canonical";
import { pricingRows, vehicleColumns } from "@/lib/data/pricing";
import { useI18n } from "@/lib/i18n";

function formatPrice(value: number | null) {
  if (value === null) return "N/A";
  return `SAR ${value}`;
}

export function TaxiServicesPricingClient() {
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />

      <main className="flex-grow">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-[var(--gold)]/5 to-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/umrah-taxi-services.png')] bg-cover bg-center bg-no-repeat z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80 z-10" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--green)]">
                {t("pricing.eyebrow")}
              </span>
              <h1 className="mt-4 font-heading text-4xl font-bold !text-white md:text-[48px]">
                Haramain Umrah Taxi Major Routes Pricing With Variety of Fleet Options
              </h1>
              <p className="mt-4 font-body text-white/90">
                {t("pricing.subtitle")}
              </p>
            </div>
          </div>
        </section>

        <AnimatedSection className="border-t border-[var(--border)] bg-[var(--bg)] py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-3 md:p-5">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1100px] border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-[var(--border)] bg-[var(--green)]/10 px-4 py-3 text-left font-heading text-sm uppercase tracking-wide text-[var(--text-1)]">
                          {t("common.route")}
                        </th>
                        {vehicleColumns.map((column, idx) => (
                          <th
                            key={column.key}
                            className="border border-[var(--border)] bg-[var(--green)]/10 px-4 py-3 text-center"
                          >
                            <p className="font-heading text-sm font-bold uppercase text-[var(--text-1)]">{column.label}</p>
                            <p className="mt-1 text-xs font-body text-[var(--text-2)]">{column.subLabel}</p>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {pricingRows.map((row, rowIndex) => (
                        <tr
                          key={row.id}
                          onClick={() => setSelectedRowId((prev) => (prev === row.id ? null : row.id))}
                          className={`cursor-pointer transition-colors ${
                            selectedRowId === row.id
                              ? "bg-[var(--gold)]/15"
                              : rowIndex % 2 === 0
                                ? "bg-[var(--bg)]/40 hover:bg-[var(--green)]/10"
                                : "bg-transparent hover:bg-[var(--green)]/10"
                          }`}
                        >
                          <td className="border border-[var(--border)] px-4 py-3 font-body text-sm font-semibold text-[var(--text-1)]">
                            {row.route}
                          </td>
                          {vehicleColumns.map((column) => (
                            <td key={column.key} className="border border-[var(--border)] px-4 py-3 text-center font-body text-sm text-[var(--text-2)]">
                              {formatPrice(row[column.key])}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
