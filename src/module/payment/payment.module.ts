/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/entity/payment.entity';
import { Theater } from 'src/entity/theater.entity';
import { User } from 'src/entity/user.entity';
import { TheaterService } from '../theater/theater.service';
import { UserService } from '../user/user.service';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
    imports: [TypeOrmModule.forFeature([Payment, Theater, User])],
  providers: [PaymentService, TheaterService, UserService],
  controllers: [PaymentController],
})
export class PaymentModule {}
