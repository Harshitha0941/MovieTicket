/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddUserDto } from './dto/user.dto';
import { UserService } from './user.service';

/**
 * starting of UserController
 */
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   *
   * @param addUserDto accepts objects of adduserDto
   * @returns user object , if user is added Successfully
   */
  @Post('/addUser')
  addUserDetails(@Body() addUserDto: AddUserDto): Promise<string> {
    return this.userService.addUserDetails(addUserDto);
  }

  /**
   * 
   * @param emailId accepts emailId as input of type string
   * @returns the promise of a user gets deleted successfully
   */
  @Delete('/:emailId')
   deleteUser(@Param('emailId')emailId:string){
    return this.userService.deleteUser(emailId);
  }
   /**
   *
   * @param emailId recives input as string
   * @returns  promise of user gets updated succesfully
   */
    @Put('updateUser/:emailId')
    updateUser(
      @Param('emailId') emailId: string,
      @Body() addUserDto: AddUserDto,
    ) {
      return this.userService.updateUser(emailId, addUserDto);
    }
}

