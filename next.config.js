/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.google.com','avatars.mds.yandex.net','localhost']
  }, 
  experimental:{
    appDir: true
  }
}


module.exports = nextConfig
