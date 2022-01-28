/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataNotAdded, DataNotFoundException, UserNotFoundException } from 'src/common/filters/customException.exception';
import { Movies } from 'src/entity/movies.entity';
import { Repository } from 'typeorm';
import { TheaterService } from '../theater/theater.service';
import { AddMoviesDto } from './dto/addMovies.dto';


/**
 * starting of MoviesService
 */
@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies)
    private movieRepository: Repository<Movies>,
    private theaterService: TheaterService,
  ) {}

  /**
   *
   * @param addMoviesDto accepts objects of addMoviesDto
   * @returns movie object , if movie is added Successfully
   */
  async addMovieDetails(addMoviesDto: AddMoviesDto): Promise<string> {
    const movie: Movies = new Movies();
    const theaterResult = await this.theaterService.getTheaterByName(
      addMoviesDto.location,
      addMoviesDto.theaterName,
    );
    Object.assign(movie, addMoviesDto);
    movie.isActive = true;
    movie.updatedAt = '';
    movie.updatedTime = '';
    const date = new Date();
    movie.createdAt = date.toLocaleDateString();
    movie.createTime = date.toLocaleTimeString();
    movie.theaters = theaterResult;
    const result = await this.movieRepository.save(movie);
    if (result) {
      return 'movies registered sucessfully';
    } else {
      throw new DataNotAdded();
    }
  }

  // async getMovieByTheaterName(theaterName:string,location:string):Promise<any>{
  //   // const theaterResult = await this.theaterService.getTheaterByName(location,theaterName);
  //   // return await this.movieRepository.find({
  //   //   theaters:theaterResult
  //   // });
  //   return await this.movieRepository
  //   .createQueryBuilder('movies')
  //   .select('movies.movieName','movieName')
  //   .addSelect('theater.theaterName','theaterName')
  //   .innerJoin('theater','theater')
  // } 

  /**
 * 
 * @returns all the movies from movies
 */

  async getAllMovies():Promise<any>{
    return await this.movieRepository.find({
      isActive:true,
    });
  }

  /**
   * 
   * @param id accepts id as input of type number
   * @returns a string if movie was deleted Successfully
   */
  async deleteMovie(id:number):Promise<string>{
    const userObj = await this.movieRepository.delete(id);
    if(userObj){
      return "Movie deleted Successfully";
    }
   else throw new DataNotFoundException();
  }
  
}