/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, Length } from "class-validator";

/* eslint-disable prettier/prettier */
export class AddPaymentDto {
    @ApiProperty() @IsString() @Length(3,16) location: string;
    @ApiProperty() @IsString() @Length(3,16) movieName: string;
    @ApiProperty() @IsNumber() price: number;
    @ApiProperty() @IsNumber() screenNo: number;
    @ApiProperty() @IsString() theaterName:string;
    @ApiProperty() @IsString() emailId:string;
}