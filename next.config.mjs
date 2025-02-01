/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com']
    },
    experimental:{
        middleware: true
    },
    async headers() {
        return [
          {
            source: '/nominatim.openstreetmap.org/reverse',
            headers: [
              { key: 'Access-Control-Allow-Credentials', value: 'true' },
              { key: 'Access-Control-Allow-Origin', value: '*' }, // می‌تونی این رو تغییر بدی
              { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE' },
              { key: 'Access-Control-Allow-Headers', value: 'X-Requested-With, Content-Type' },
            ],
          },
        ];
      },
};

export default nextConfig;


