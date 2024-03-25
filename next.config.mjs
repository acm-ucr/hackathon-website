import nextMDX from "@next/mdx";
import nextBundleAnalyzer from "@next/bundle-analyzer";
import rehypePrettyCode from "rehype-pretty-code";

const options = {};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [[rehypePrettyCode, , options]],
  },
});

const withBundleAnalyzer = nextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/participants",
        permanent: true,
      },
      {
        source: "/user",
        destination: "/user/dashboard",
        permanent: true,
      },
      {
        source: "/form",
        destination: "/form/participant",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**",
      },
    ],
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));
