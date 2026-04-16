"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { pricingRows, vehicleColumns, type PricingRow } from "@/lib/data/pricing";
import { useI18n } from "@/lib/i18n";

function formatPrice(value: number | null) {
  if (value === null) return "N/A";
  return `SAR ${value}`;
}

export function Pricing() {
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
  const { t } = useI18n();
  return (
    <AnimatedSection id="pricing" className="border-t border-[var(--border)] bg-[var(--bg)] py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--green)]">
            {t("pricing.eyebrow")}
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold text-[var(--text-1)] md:text-[48px]">
            {t("pricing.title")}
          </h2>
          <p className="mt-4 font-body text-[var(--text-2)]">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-3 md:p-5">
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
    </AnimatedSection>
  );
}
