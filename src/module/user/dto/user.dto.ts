/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, Length, IsEmail } from "class-validator";

/* eslint-disable prettier/prettier */
export class AddUserDto {
    @ApiProperty() @IsString() @Length(8,16) userName: string;
    @ApiProperty() @IsEmail()  emailId: string;
    @ApiProperty() @IsString() @Length(8,16)  
    // @Matches(/((?=.\d)|(?=.\W+))(?![.\n])(?=.[A-Z])(?=.[a-z]).*$/, {message: 'password too weak'})
    password: string;
    @ApiProperty() @IsNumber() phoneNum: number;

}