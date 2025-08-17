import { withSentryConfig } from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN; // Your Sentry DSN here

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your image hosting domain
    formats: ['image/avif', 'image/webp']
},
  optimization: {
    images: {
      loader: 'default',
      path: '/_next/image'
}
},
  // Additional configurations can be added here as needed
};

// Sentry configuration for error tracking
const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs from Sentry
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);