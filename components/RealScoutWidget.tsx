"use client";

import { realScoutAgentEncodedId } from "@/lib/site";

/**
 * RealScout search widget. Rendered on every page.
 * Script loaded once in root layout (em.realscout.com).
 * Using dangerouslySetInnerHTML per RealScout widget integration rules.
 */
export function RealScoutWidget() {
  const widgetMarkup = `<realscout-simple-search agent-encoded-id="${realScoutAgentEncodedId}" placeholder="Search Peccole Ranch, Las Vegas..." widget-width="100%"></realscout-simple-search>`;

  return (
    <section className="mx-auto max-w-4xl px-4 py-12" aria-label="Search Peccole Ranch homes">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Search homes in Peccole Ranch
      </h2>
      <div
        className="min-h-[120px] w-full"
        dangerouslySetInnerHTML={{ __html: widgetMarkup }}
      />
    </section>
  );
}
