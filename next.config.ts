import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({});
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/intro",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(withNextra(nextConfig));
