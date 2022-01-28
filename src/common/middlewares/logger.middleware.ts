/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request } from 'express-serve-static-core';
import { request, response, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: Function) :void{
    
    const {ip,method,originalUrl} = request;;
    const userAgent  = request.get('user-agent') || '';
    
    response.on('finish',()=>{
      const {statusCode} =  response;
      const contentLength = response.get('content-Length');

      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent}  ${ip}`
      );
    });
    next();
  }  

}
