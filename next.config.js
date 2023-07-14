/** @type {import('next').NextConfig} */
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
    ];
  },
};

module.exports = nextConfig;
