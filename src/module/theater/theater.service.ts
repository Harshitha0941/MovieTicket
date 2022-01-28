/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataNotAdded, DataNotFoundException } from 'src/common/filters/customException.exception';
import { Theater } from 'src/entity/theater.entity';
import { Repository } from 'typeorm';
import { AddTheaterDto } from './dto/addTheater.dto';

/**
 * starting of TheaterService
 */
@Injectable()
export class TheaterService {
  constructor(
    @InjectRepository(Theater)
    private thaterRepository: Repository<Theater>,
  ) {}

  /**
   *
   * @param addtheaterDto accepts objects of addtheaterDto
   * @returns theater object , if theater is added Successfully
   */
  async addTheaterDetails(addtheaterDto: AddTheaterDto): Promise<string> {
    const theater: Theater = new Theater();
    Object.assign(theater, addtheaterDto);
    theater.isActive = true;
    theater.updatedAt = '';
    theater.updatedTime = '';
    const date = new Date();
    theater.createdAt = date.toLocaleDateString();
    theater.createTime = date.toLocaleTimeString();
    const result = await this.thaterRepository.save(theater);
    if (result) {
      return 'theater added sucessfully';
    } else {
      throw new DataNotAdded();
    }
  }

  /**
   * 
   * @param location accepts location as input of type string
   * @param theaterName accepts theaterName as input of type string
   * @returns the theater object based on location and theaterName
   */
  async getTheaterByName(location: string, theaterName: string) {
    return await this.thaterRepository.find({
      location: location,
      theaterName: theaterName,
    });
  }

   /**
 * 
 * @returns all the theaters
 */
  async getAllTheater():Promise<any>{
    return await this.thaterRepository.find({
      isActive:true,
    }
    );
  }

  /**
   * 
   * @param id accepts id as input of type number
   * @returns a string if theater was deleted Successfully
   */
   async deleteTheater(id:number):Promise<string>{
    const theaterObj = await this.thaterRepository.delete(id);
   
    if(theaterObj){
      return "theater deleted Successfully";
    }
   else throw new DataNotFoundException();
  }

  /**
 * 
 * @param addtheaterDto accepts addtheaterdto as input
 * @param id accepts id as input
 * @returns a updated theater details
 */
  async updateTheaterDetails(addtheaterDto: AddTheaterDto, id: number) {
    const theaterObj = await this.thaterRepository.findOne({
      id: id,
    });
    if (theaterObj) {
      const theater = new Theater();
      Object.assign(theater, addtheaterDto);
      const date = new Date();
      theater.updatedAt = date.toLocaleDateString();
      theater.updatedTime = date.toLocaleTimeString();
      return await this.thaterRepository.update(id, theater);
    } else {
      throw new DataNotFoundException();
    }
  }
  }