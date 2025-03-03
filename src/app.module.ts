import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserModule } from "./user/user.module";

@Module({
    controllers:[AppController],
    providers:[],
    imports: [UserModule]
})
export class AppModule {

}