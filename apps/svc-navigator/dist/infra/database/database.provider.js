"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drizzleProvider = exports.DRIZZLE = void 0;
const pg_1 = require("pg");
const schema_1 = require("./schema");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const config_1 = require("@nestjs/config");
exports.DRIZZLE = Symbol("DRIZZLE_CONNECTION");
exports.drizzleProvider = {
    provide: exports.DRIZZLE,
    inject: [config_1.ConfigService],
    useFactory: async (config) => {
        const dbUrl = config.get('DATABASE_URL');
        if (!dbUrl) {
            throw new Error(`DATABASE_URL not defined in .env`);
        }
        const pool = new pg_1.Pool({
            connectionString: dbUrl,
        });
        return (0, node_postgres_1.drizzle)(pool, { schema: schema_1.drizzleSchema });
    },
};
//# sourceMappingURL=database.provider.js.map