/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'aceem.ghanemtech.com'],
  }
};

export default withNextIntl(nextConfig);
