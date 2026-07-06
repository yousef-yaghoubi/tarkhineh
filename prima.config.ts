export default {
  schema: 'prisma/schema.prisma',
  datasource: {
    provider: 'mongodb',
    url: process.env.DATABASE_URL,
  },
};
