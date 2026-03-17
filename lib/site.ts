/**
 * Single source of truth for site and NAP.
 * Must match Google Business Profile exactly. Update when GBP changes.
 */

export const site = {
  name: "Peccole Homes",
  shortDescription: "Real estate in Peccole Ranch, Las Vegas",
  baseUrl: "https://peccolehomes.com",
} as const;

export const nap = {
  businessName: site.name,
  street: "9501 Red Hills Rd",
  city: "Las Vegas",
  state: "NV",
  zip: "89117",
  /** Replace with GBP phone; use tel: link in UI */
  phone: "(702) 555-0100",
} as const;

export const fullAddress = `${nap.street}, ${nap.city}, ${nap.state} ${nap.zip}`;

export const geo = {
  /** For schema and map embed - office/Peccole Ranch area */
  latitude: 36.1797,
  longitude: -115.2648,
} as const;

/** Google Maps URL for Directions CTA */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

/** Replace with your GBP review page URL */
export const googleReviewsUrl = "https://search.google.com/local/writereview?placeid=PLACE_ID";
