/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddTheaterDto } from './dto/addTheater.dto';
import { TheaterService } from './theater.service';

/**
 * starting of TheaterController
 */
@Controller('theater')
@ApiTags('theater')
export class TheaterController {
  constructor(private readonly theaterService: TheaterService) {}

  /**
   *
   * @param addtheaterDto accepts objects of addtheaterDto
   * @returns theater object , if theater is added Successfully
   */
  @Post('/addTheater')
  addTheaterDetails(@Body() addtheaterDto: AddTheaterDto): Promise<string> {
    return this.theaterService.addTheaterDetails(addtheaterDto);
  }

  /**
 * 
 * @returns all the theaters
 */
  @Get('/Alltheaters')
  async getAllTheaters():Promise<any>{
    return await this.theaterService.getAllTheater();
}
/**
   * 
   * @param id accepts id as input of type number
   * @returns a string if theater was deleted Successfully
   */
 @Delete('/:id')
 deleteUser(@Param('id')id:number){
  return this.theaterService.deleteTheater(id);
}

/**
 * 
 * @param addtheaterDto accepts addtheaterdto as input
 * @param id accepts id as input
 * @returns a updated theater details
 */
@Put('/updateTheater/:id')
  async updateTheaterDetails(
    @Body() addtheaterDto: AddTheaterDto,
    @Param('id') id: number,
  ) {
    return await this.theaterService.updateTheaterDetails(addtheaterDto, id);
  }
}