"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersPgSchema = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.usersPgSchema = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey(),
    email: (0, pg_core_1.text)('email').notNull().unique(),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow(),
});
//# sourceMappingURL=users.js.map