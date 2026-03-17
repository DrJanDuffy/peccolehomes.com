import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Peccole Ranch Real Estate",
  description:
    "Frequently asked questions about Peccole Ranch, Las Vegas: location, HOA, schools, and buying or selling in the neighborhood.",
};

const faqs = [
  {
    question: "Where is Peccole Ranch?",
    answer:
      "Peccole Ranch is a master-planned community in Summerlin, Las Vegas, Nevada. It is west of the Strip, with convenient access to the 215 Beltway and Red Rock Canyon.",
  },
  {
    question: "What are the HOA fees like in Peccole Ranch?",
    answer:
      "HOA fees vary by sub-association and amenities (pools, parks, landscaping). When you’re looking at a specific home, we can get the exact HOA amount and what it covers.",
  },
  {
    question: "Are there good schools in Peccole Ranch?",
    answer:
      "Peccole Ranch is served by Clark County School District schools in the Summerlin area. Many families choose the area for its school options and family-friendly environment.",
  },
  {
    question: "What types of homes are in Peccole Ranch?",
    answer:
      "You’ll find single-family homes in a range of sizes and styles, including newer construction and established neighborhoods. Floor plans and lot sizes vary by subdivision.",
  },
  {
    question: "How do I get started buying or selling in Peccole Ranch?",
    answer:
      "Contact us for a conversation about your goals. We can share current market insight, listings, and next steps for buying or selling in Peccole Ranch.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Frequently asked questions
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Common questions about Peccole Ranch and our real estate services.
      </p>

      <dl className="mt-10 space-y-8">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dt className="text-lg font-semibold text-gray-900 dark:text-white">
              {faq.question}
            </dt>
            <dd className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</dd>
          </div>
        ))}
      </dl>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
