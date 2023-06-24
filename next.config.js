/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{EMAIL:process.env.EMAIL,
    PASSWORD:process.env.PASSWORD,
RECEIVING:process.env.RECEIVING}
}

module.exports = nextConfig
