import { site } from "@/lib/site";

type WebPageJsonLdProps = {
  name: string;
  description: string;
  path?: string;
};

/**
 * WebPage schema for AEO: helps answer engines identify and cite each page.
 */
export function WebPageJsonLd({ name, description, path = "" }: WebPageJsonLdProps) {
  const url = path ? `${site.baseUrl}${path}` : site.baseUrl;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.baseUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
