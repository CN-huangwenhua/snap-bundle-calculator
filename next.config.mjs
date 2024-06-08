import nextI18NextConfig from './next-i18next.config.mjs';
const { i18n } = nextI18NextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n
};

export default nextConfig;
