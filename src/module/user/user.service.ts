/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataNotAdded } from 'src/common/filters/customException.exception';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { AddUserDto } from './dto/user.dto';

/**
 * starting of UserService
 */

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  /**
   *
   * @param addUserDto accepts objects of adduserDto
   * @returns user object , if user is added Successfully
   */
  async addUserDetails(addUserDto: AddUserDto): Promise<string> {
    const user: User = new User();
    Object.assign(user, addUserDto);
    user.isActive = true;
    user.updatedAt = '';
    user.updatedTime = '';
    const date = new Date();
    user.createdAt = date.toLocaleDateString();
    user.createTime = date.toLocaleTimeString();
    const result = await this.userRepository.save(user);
    if (result) {
      return 'user registered sucessfully';
    } else {
      throw new DataNotAdded();
    }
  }

  /**
   * 
   * @param emailId accepts emailId of type string
   * @returns 
   */
  async getUserByEmail(emailId: string) {
    return await this.userRepository.findOne({
      emailId: emailId,
    });
  }

  /**
   * 
   * @param emailId accepts emailId as input of type string
   * @returns the promise of a user gets deleted successfully
   */
  async deleteUser(emailId:string){
    const userResult = await this.getUserByEmail(emailId);
    if(userResult){
      userResult.isActive = false;
    const date = new Date();
    userResult.updatedTime = date.toLocaleTimeString();
    userResult.updatedAt= date.toLocaleDateString();
    return await this.userRepository.update(userResult.id,userResult);
    }
    else throw new UnauthorizedException();
  }

  /**
   *
   * @param emailId recives input as string
   * @returns  promise of user gets updated succesfully
   */
   async updateUser(emailId: string, addUserDto: AddUserDto) {
    const userResult = await this.getUserByEmail(emailId);
    if (userResult.isActive == true) {
      const user: User = new User();
      Object.assign(user, addUserDto);
      const date = new Date();
      user.updatedAt = date.toLocaleDateString();
      user.updatedTime = date.toLocaleTimeString();
      return await this.userRepository.update(userResult.id, user);
    } else {
      throw new UnauthorizedException();
    }
  }
}