/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entity/user.entity';
import { Payment } from './entity/payment.entity';
import { Theater } from './entity/theater.entity';
import { Movies } from './entity/movies.entity';
import { UserModule } from './module/user/user.module';
import { TheaterModule } from './module/theater/theater.module';
import { MoviesModule } from './module/movies/movies.module';
import { PaymentModule } from './module/payment/payment.module';

@Module({
  imports: [
 
TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'movieapp',
      entities: [User,Payment,Theater,Movies],
      synchronize: false,
    }),UserModule,TheaterModule,MoviesModule,PaymentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
