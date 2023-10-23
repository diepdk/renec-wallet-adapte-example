/** @type {import('next').NextConfig} */

/** eslint-disable @typescript-eslint/no-var-requires */
const withTM = require("next-transpile-modules")([
  "@renec-foundation/wallet-adapter-react",
]);

const nextConfig = withTM({})

module.exports = nextConfig
