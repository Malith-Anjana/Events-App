/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',  // Add the hostname here
        port: '',  // Leave this empty unless you're using a specific port
        pathname: '/f/**',  // Use wildcards to specify which paths are allowed (e.g., all images under /f/)
      },
    ],
  },
};

export default nextConfig;
