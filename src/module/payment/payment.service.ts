/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from 'src/entity/payment.entity';
import { Repository } from 'typeorm';
import { TheaterService } from '../theater/theater.service';
import { UserService } from '../user/user.service';
import { AddPaymentDto } from './dto/payment.dto';
import { User } from './../../entity/user.entity';
import { UserNotFoundException } from 'src/common/filters/customException.exception';

/**
 * starting of PaymentService
 */
@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(Payment)
        private paymentRepository: Repository<Payment>,
        private readonly theaterService:TheaterService,
        private readonly userService:UserService,
      ) {}
      /**
       * 
       * @param addPaymentDto accepts addPaymentDto as input object
       * @returns a payment dto object
       */
    async addPaymentDetails(addPaymentDto:AddPaymentDto):Promise<any>{
        const payment = new Payment();
        payment.location = addPaymentDto.location;
        payment.movieName = addPaymentDto.movieName;
        payment.price = addPaymentDto.price;
        payment.screenNo = addPaymentDto.screenNo;
        const theaterResult: any = await this.theaterService.getTheaterByName(
            addPaymentDto.location,
            addPaymentDto.theaterName,
          );
          const userResult: User = await this.userService.getUserByEmail(
            addPaymentDto.emailId,
          );
        //   payment.theater.id=theaterResult;
        if(userResult.isActive == true){
          payment.user = userResult;    
          payment.status = "Done";
          const date = new Date();
          payment.createTime = date.toLocaleTimeString();
          payment.createdAt= date.toLocaleDateString();
        return this.paymentRepository.save(payment);
        }
         else throw new UserNotFoundException();
    }

    /**
     * 
     * @returns all the payment details
     */
    async getAllPaymentDetails():Promise<any>{
      return await this.paymentRepository.find();
    }
}
