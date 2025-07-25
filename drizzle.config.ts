import { type Config } from "drizzle-kit";
import 'dotenv/config';
import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["t3gallery_*"],
} satisfies Config;
