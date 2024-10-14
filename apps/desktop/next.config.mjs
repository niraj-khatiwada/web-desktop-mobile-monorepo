/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "tailwind-config"],
  output: "export",
  distDir: "dist",
  cleanDistDir: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
