/* eslint-disable prettier/prettier */
import { HttpException } from "@nestjs/common";
import { HttpStatus } from '@nestjs/common';

/**
 * Staring point of UnauthorizedException exception
 */
export class UnauthorizedException extends HttpException {
    constructor() {
        super("Invalid User", HttpStatus.UNAUTHORIZED);
    }
}

/**
 * @ignore
 */
export class UserNotFoundException extends HttpException {
    constructor() {
        super("User Not Found ,please log in to continue", HttpStatus.NOT_FOUND);
    }
}

/**
 * @ignore
 */
export class WrongCredentialsException extends HttpException {
    constructor() {
        super("Invalid Credentials", HttpStatus.NOT_ACCEPTABLE);
    }
}

/**
 * @ignore
 */
export class DataNotFoundException extends HttpException {
    constructor() {
        super("No data found", HttpStatus.NOT_FOUND);
    }
}

/**
 * @ignore
 */
export class AuthenticationException extends HttpException {
    constructor() {
        super("Authentication error", HttpStatus.UNAUTHORIZED);
    }
}

/**
 * @ignore
 */
 export class DataNotAdded extends HttpException {
    constructor() {
        super("data not added succefully", HttpStatus.BAD_REQUEST);
    }
}