import type { Metadata } from "next";
import { nap, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${nap.businessName} — your Peccole Ranch and Las Vegas real estate expert. Local knowledge, trusted service.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        About {nap.businessName}
      </h1>
      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
        We focus on Peccole Ranch and the greater Summerlin area so we can offer real local expertise— 
        from market trends and neighborhood fit to schools and HOA details. Whether you’re buying or selling 
        in Peccole Ranch, Las Vegas, we’re here to help with a straightforward, professional experience.
      </p>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Our office is at {nap.street}, {nap.city}, {nap.state} {nap.zip}. 
        Stop by, call, or reach out through our contact page.
      </p>
      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        {nap.businessName} — Peccole Ranch real estate. {site.baseUrl}
      </p>
    </div>
  );
}
