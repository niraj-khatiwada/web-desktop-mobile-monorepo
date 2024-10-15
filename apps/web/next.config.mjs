/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui", "tailwind-config"],
  output: "export",
  distDir: "dist",
  cleanDistDir: true,
  trailingSlash: true,
};

export default nextConfig;
