/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from "typeorm";
import { Movies } from './movies.entity';
import { Payment } from "./payment.entity";

/* eslint-disable prettier/prettier */

/**
 * starting of User Entity
 */
@Entity()
export class Theater {

    /**
     * auto incremental id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * generates UserName column
     */
    @Column()
    @IsString()
    @ApiProperty()
    theaterName: string;

    /**
    * generates location column
    */
    @Column()
    @IsEmail()
    @ApiProperty()
    location: string;

    /**
     * generates rating column
     */
    @Column()
    @IsNumber()
    @ApiProperty()
    rating: number;

    /**
    * generates noOfScreens column
    */
    @Column()
    @IsNumber()
    @ApiProperty()
    noOfScreens: number;

    /**
     * generates description column
     */
    @Column()
    @IsString()
    @ApiProperty()
    description: string;

    /**
     * generates boxPrice column
     */
    @Column()
    @IsNumber()
    @ApiProperty()
    boxPrice: number;

    /**
    * generates balconyPrice column
    */
    @Column()
    @IsNumber()
    @ApiProperty()
    balconyPrice: number;

    /**
   * generates benchPrice column
   */
    @Column()
    @IsNumber()
    @ApiProperty()
    benchPrice: number;


    /**
     * generates isActive column
     */
    @Column()
    @ApiProperty()
    isActive: boolean;

    /**
     * generates updatedAt column
     */
    @Column({ default: ' ' })
    @IsString()
    updatedAt: string;

    /**
     * generates createdAt column
     */
    @Column()
    @IsString()
    createdAt: string;

    /**
     * generates updatedTime column
     */
    @Column({ default: ' ' })
    @IsString()
    updatedTime: string;

    /**
     * generates createTime column
     */
    @Column()
    @IsString()
    createTime: string;

    /**
     * mny to many between movies and theaters
     */
    @ManyToMany(() => Movies, movies => movies.theaters, {
        // cascade: true
    })
    movies: Movies[];

    /**
   * one-to-many relationship between payment and theater
   */
    @OneToMany(() => Payment, (payment) => payment.theater, {
    })
    payment: Payment[];


}