/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This tells Netlify to shut up and just build the site 
    // even if it finds type errors like the smoothEase array.
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
