/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddMoviesDto } from './dto/addMovies.dto';
import { MoviesService } from './movies.service';

/**
 * starting of MoviesController
 */
@Controller('movies')
@ApiTags('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  /**
   *
   * @param addMoviesDto accepts objects of addMoviesDto
   * @returns movie object , if movie is added Successfully
   */
  @Post('/addTheater')
  addMovieDetails(@Body() addMoviesDto: AddMoviesDto): Promise<string> {
    return this.moviesService.addMovieDetails(addMoviesDto);
  }

  // @Get('/:location/:theaterName')
  // async getMovieByTheaterName(@Param('location')location:string,@Param('theaterName')theaterName:string):Promise<any>{
  //   return await this.moviesService.getMovieByTheaterName(location,theaterName);
  // }

/**
 * 
 * @returns all the movies from movies
 */
@Get()
async getAllMovies():Promise<any>{
    return await this.moviesService.getAllMovies();
}

/**
   * 
   * @param id accepts id as input of type number
   * @returns a string if movie was deleted Successfully
   */
@Delete('/:id')
   deleteUser(@Param('id')id:number){
    return this.moviesService.deleteMovie(id);
  }
}