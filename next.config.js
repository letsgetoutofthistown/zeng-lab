/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "out",
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  exportPathMap: function () {
    return { 
        '/': {page: '/'},
        '/zeng': {page: '/zeng'},
        '/_app': {page: '/_app'},
        '/_document': {page: '/_document'},
        '/contact': {page: '/contact'},
        '/index': {page: '/index'},
        '/itoh': {page: '/itoh'},
        '/labs': {page: '/labs'},
        '/seminars': {page: '/seminars'},
        '/workshops': {page: '/workshops'},
    };
},
}

module.exports = nextConfig
