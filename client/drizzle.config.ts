import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./configs/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://marketplace_owner:3DbokrRAMxQ7@ep-orange-dream-a53e6nj0.us-east-2.aws.neon.tech/marketplace?sslmode=require',
  },
  verbose: true,
  strict: true,
})