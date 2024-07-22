/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/best-practices",
        destination: "https://app.tthroo.com/best-practices",
        permanent: true,
      },
      {
        source: "/build-from-scratch",
        destination: "https://app.tthroo.com/build-from-scratch",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
