"use client";

import { realScoutAgentEncodedId } from "@/lib/site";

/**
 * RealScout search + office listings. Rendered on every page.
 * Script loaded once in root layout (em.realscout.com).
 * Using dangerouslySetInnerHTML per RealScout widget integration rules.
 */
export function RealScoutWidget() {
  const searchMarkup = `<realscout-simple-search agent-encoded-id="${realScoutAgentEncodedId}" placeholder="Search Peccole Ranch Homes, Las Vegas..." widget-width="100%"></realscout-simple-search>`;
  const officeListingsMarkup = [
    `<realscout-office-listings`,
    ` agent-encoded-id="${realScoutAgentEncodedId}"`,
    ` sort-order="STATUS_AND_SIGNIFICANT_CHANGE"`,
    ` listing-status="For Sale"`,
    ` property-types="SFR,MF"`,
    ` price-min="0"`,
    ` price-max="9999999"`,
    `></realscout-office-listings>`,
  ].join("");

  return (
    <section className="mx-auto max-w-6xl px-4 py-12" aria-label="Peccole Ranch Homes search and listings">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Search Peccole Ranch Homes
      </h2>
      <div
        className="min-h-[120px] w-full"
        dangerouslySetInnerHTML={{ __html: searchMarkup }}
      />
      <h2 className="mt-12 mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Peccole Ranch Homes for Sale
      </h2>
      <div
        className="min-h-[320px] w-full"
        dangerouslySetInnerHTML={{ __html: officeListingsMarkup }}
      />
    </section>
  );
}
