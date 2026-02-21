/**
 * Avisos "Managed item ... isn't a directory" no build vêm do cache do webpack
 * ao rastrear binários SWC de outras plataformas (Linux/macOS). São inofensivos.
 * Se incomodar: npm run clean && npm run build
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'via.placeholder.com', pathname: '/**' },
    ],
  },
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
