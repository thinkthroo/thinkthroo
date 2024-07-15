/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/best-practices",
        destination: "https://app.tthroo.com/best-practices",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
