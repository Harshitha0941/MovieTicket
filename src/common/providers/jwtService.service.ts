/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
//  /* eslint-disable prettier/prettier */
//  /* eslint-disable @typescript-eslint/no-unused-vars */
//  /* eslint-disable prettier/prettier */
//  import { Injectable } from '@nestjs/common';
//  import { Response, Request } from 'express';
//  import * as bcrypt from 'bcrypt';

//  import { JwtService } from '@nestjs/jwt';

//  @Injectable()
// export class JwtTokenService {

//     constructor(
//         private jwtService: JwtService
//     ) { }
//    //   create,delete,verify

//     async generateToken(login: Login, response: any): Promise<any> {
//         const jwt = await this.jwtService.signAsync({ id: login.id });
//         console.log(" ", jwt);
//         response.cookie('jwt', jwt, { httpOnly: true });
//       return jwt;
//    }

//     async verifyToken(token:string): Promise<any> {
//         const data = await this.jwtService.verifyAsync(token);
//        return data;
//    }

//     async deleteToken(response: Response) {
//          response.clearCookie('jwt');
//          return {
//              message: "success"
//          }
//      }

// }
