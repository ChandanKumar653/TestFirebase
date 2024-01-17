// /** @type {import('next').NextConfig} */
// const nextConfig = {
// }

// module.exports = nextConfig

const path = require("path");
// get the authenticated Firebase App
const firebaseApp = getApp(useRouter().query.__firebaseAppName);
module.exports = {
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
