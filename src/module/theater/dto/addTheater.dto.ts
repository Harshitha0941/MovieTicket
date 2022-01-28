/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, Length } from "class-validator";

/* eslint-disable prettier/prettier */
export class AddTheaterDto {
    @ApiProperty() @IsString() @Length(3, 16) theaterName: string;
    @ApiProperty() @IsString() @Length(3, 16) location: string;
    @ApiProperty() @IsNumber() rating: number;
    @ApiProperty() @IsNumber() noOfScreens: number;
    @ApiProperty() @IsString() description: string;
    @ApiProperty() @IsNumber() boxPrice: number;
    @ApiProperty() @IsNumber() balconyPrice: number;
    @ApiProperty() @IsNumber() benchPrice: number;

}