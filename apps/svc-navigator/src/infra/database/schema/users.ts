import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core'

export const usersPgSchema = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey(),
    email: text('email').notNull().unique(),
    createdAt: timestamp('created_at').defaultNow(),
})
