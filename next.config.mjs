/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ldb-phinf.pstatic.net',
        port: '',
        pathname: '/**',
      },
    ],
    // domains: ["ldb-phinf.pstatic.net"],
    // disableStaticImages: true,
  },
};

export default nextConfig;
