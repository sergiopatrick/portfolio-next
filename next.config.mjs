/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Old service URLs (3 axes under /servicos/) moved to keyword URLs at the
  // root in the 2026 redesign. Permanent so Google transfers the signals.
  async redirects() {
    return [
      { source: '/servicos/seo', destination: '/seo-tecnico/', permanent: true },
      { source: '/servicos/front-end', destination: '/desenvolvedor-wordpress/', permanent: true },
      { source: '/servicos/automation', destination: '/automacao-com-ia/', permanent: true },
    ];
  },
};

export default nextConfig;
