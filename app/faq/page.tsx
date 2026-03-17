import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/WebPageJsonLd";
import { agent, brokerage } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Peccole Ranch Homes",
  description:
    "Frequently asked questions about Peccole Ranch Homes and Las Vegas real estate with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties: location, HOA, schools, buying or selling.",
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
    question: "What types of Peccole Ranch homes are available?",
    answer:
      "You’ll find single-family Peccole Ranch homes in a range of sizes and styles, including newer construction and established neighborhoods. Floor plans and lot sizes vary by subdivision.",
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
      <WebPageJsonLd
        name="FAQ — Peccole Ranch Homes"
        description={`Frequently asked questions about Peccole Ranch Homes and Las Vegas real estate with ${agent.name}, ${brokerage.name}: where is Peccole Ranch, HOA fees, schools, types of homes, and how to buy or sell.`}
        path="/faq"
      />
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Frequently asked questions
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300" data-aeo-answer>
        Common questions about Peccole Ranch Homes and Las Vegas real estate with {agent.name}, {brokerage.name}, answered: location, HOA, schools, home types, and how to get started buying or selling.
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
