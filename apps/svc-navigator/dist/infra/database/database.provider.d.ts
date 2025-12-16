import { Pool } from "pg";
import { ConfigService } from "@nestjs/config";
export declare const DRIZZLE: unique symbol;
export declare const drizzleProvider: {
    provide: symbol;
    inject: (typeof ConfigService)[];
    useFactory: (config: ConfigService) => Promise<import("drizzle-orm/node-postgres").NodePgDatabase<{
        users: import("drizzle-orm/pg-core").PgTableWithColumns<{
            name: "users";
            schema: undefined;
            columns: {
                id: import("drizzle-orm/pg-core").PgColumn<{
                    name: "id";
                    tableName: "users";
                    dataType: "string";
                    columnType: "PgUUID";
                    data: string;
                    driverParam: string;
                    notNull: true;
                    hasDefault: true;
                    isPrimaryKey: true;
                    isAutoincrement: false;
                    hasRuntimeDefault: false;
                    enumValues: undefined;
                    baseColumn: never;
                    identity: undefined;
                    generated: undefined;
                }, {}, {}>;
                email: import("drizzle-orm/pg-core").PgColumn<{
                    name: "email";
                    tableName: "users";
                    dataType: "string";
                    columnType: "PgText";
                    data: string;
                    driverParam: string;
                    notNull: true;
                    hasDefault: false;
                    isPrimaryKey: false;
                    isAutoincrement: false;
                    hasRuntimeDefault: false;
                    enumValues: [string, ...string[]];
                    baseColumn: never;
                    identity: undefined;
                    generated: undefined;
                }, {}, {}>;
                createdAt: import("drizzle-orm/pg-core").PgColumn<{
                    name: "created_at";
                    tableName: "users";
                    dataType: "date";
                    columnType: "PgTimestamp";
                    data: Date;
                    driverParam: string;
                    notNull: false;
                    hasDefault: true;
                    isPrimaryKey: false;
                    isAutoincrement: false;
                    hasRuntimeDefault: false;
                    enumValues: undefined;
                    baseColumn: never;
                    identity: undefined;
                    generated: undefined;
                }, {}, {}>;
            };
            dialect: "pg";
        }>;
    }> & {
        $client: Pool;
    }>;
};
//# sourceMappingURL=database.provider.d.ts.map