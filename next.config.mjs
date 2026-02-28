// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: false,
        formats: ['image/avif', 'image/webp'],
        quality: 75,
    },
};

module.exports = nextConfig;
