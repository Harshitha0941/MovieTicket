/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, Length } from "class-validator";

/* eslint-disable prettier/prettier */
export class AddMoviesDto {
    @ApiProperty() @IsString() @Length(3,16) language: string;
    @ApiProperty() @IsString() @Length(3,16) movieName: string;
    @ApiProperty() @IsNumber() screenNo: number;
    @ApiProperty() @IsNumber() rating: number;
    @ApiProperty() @IsString() theaterName:string;
    @ApiProperty() @IsString() location:string;
}