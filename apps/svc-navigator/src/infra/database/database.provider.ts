import { Pool } from "pg";
import { drizzleSchema } from "./schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { ConfigService } from "@nestjs/config";

export const DRIZZLE = Symbol("DRIZZLE_CONNECTION");

export const drizzleProvider = {
  provide: DRIZZLE,
  inject: [ConfigService],
  useFactory: async (config: ConfigService) => {
    const dbUrl = config.get<string>('DATABASE_URL')

    if (!dbUrl) {
        throw new Error(`DATABASE_URL not defined in .env`)
    }

    const pool = new Pool({
      connectionString: dbUrl,
    });
    
    return drizzle(pool, { schema: drizzleSchema });
  },
};
