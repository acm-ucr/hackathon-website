/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/admins",
        destination: "/admins/participants",
        permanent: true,
      },
      {
        source: "/users",
        destination: "/users/dashboard",
        permanent: true,
      },
      {
        source: "/forms",
        destination: "/forms/participants",
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

module.exports = nextConfig;
