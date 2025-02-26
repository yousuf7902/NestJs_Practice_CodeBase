import { Jwt } from './../node_modules/@types/jsonwebtoken/index.d';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    CustomerModule,
    JwtModule.register({
      global: true,
      secret:
        'fjdsklfjodsnfkdsmdsfoijdlkfdskloinvnm',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
