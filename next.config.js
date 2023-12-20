/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // unoptimized: true,
    // loader: "default",
    // path: "",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        // pathname: "/dip2pjbju/image/**",
      },
    ],
  },
};

module.exports = nextConfig;
