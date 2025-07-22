import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {};

if (process.env.NODE_ENV === 'development') {
   setupDevPlatform();
}

export default nextConfig;
