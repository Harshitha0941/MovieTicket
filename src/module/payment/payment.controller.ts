/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddPaymentDto } from './dto/payment.dto';
import { PaymentService } from './payment.service';

/**
 * starting of paymentController
 */
@Controller('payment')
@ApiTags('Payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

  /**
   *
   * @param addPaymentDto accepts objects of addPaymentDto
   * @returns payment object , if user is payment Successfully
   */
  @Post('/addPayment')
  addPaymentDetails(@Body() addPaymentDto: AddPaymentDto): Promise<string> {
    return this.paymentService.addPaymentDetails(addPaymentDto);
  }

   /**
     * 
     * @returns all the payment details
     */
  @Get()
  async getAllPaymentDetails():Promise<any>{
    return this.paymentService.getAllPaymentDetails();
  }
}
