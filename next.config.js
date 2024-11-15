/** @type {import('next').NextConfig} */
const nextConfig = {
   // 设置 basePath 为你的项目基础路径
   basePath: '/src',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
