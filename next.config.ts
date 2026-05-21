import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.google.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.winudf.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'traidmod.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'traidmod.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 't7milat.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.appcreator24.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'app.traidsoft.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.top4top.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www2.0zz0.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.apkpures.xyz',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.git99.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'yalamod.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'snapoid.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
