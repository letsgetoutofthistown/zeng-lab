/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "out",
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  exportPathMap: function () {
    return { 
        '/': {page: '/'},
        '/zeng': {page: '/zeng/zeng'},
        '/_app': {page: '/_app/_app'},
        '/_document': {page: '/_document/_document'},
        '/contact': {page: '/contact/contact'},
        '/index': {page: '/index/index'},
        '/itoh': {page: '/itoh/itoh'},
        '/labs': {page: '/labs/labs'},
        '/seminars': {page: '/seminars/seminars'},
        '/workshops': {page: '/workshops/workshops'},
    };
},
}

module.exports = nextConfig
