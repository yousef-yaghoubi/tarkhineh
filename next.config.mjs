/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com']
    },
    experimental:{
        middleware: true
    }
};

export default nextConfig;
