import { Module } from "@nestjs/common";
import { DatabaseModule } from "./infra/database/database.module";
import AppController from "./app.controller";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports:[
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: './.env'
        }),
        DatabaseModule
    ],
    controllers:[],
    providers:[],
})
class AppModule {}

export default AppModule