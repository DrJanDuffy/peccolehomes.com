import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com",
              "connect-src 'self' https://em.realscout.com https://www.realscout.com",
              "img-src 'self' data: https: blob:",
              "style-src 'self' 'unsafe-inline'",
              "frame-src 'self' https://em.realscout.com https://www.realscout.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
