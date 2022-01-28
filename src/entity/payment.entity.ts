/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";
import { Theater } from './theater.entity';

/* eslint-disable prettier/prettier */

/**
 * starting of User Entity
 */
@Entity()
export class Payment {

    /**
     * auto incremental id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
    * generates location column
    */
    @Column()
    @IsEmail()
    @ApiProperty()
    location: string;

    /**
     * generates movieName column
     */
    @Column()
    @IsString()
    @ApiProperty()
    movieName: string;


    /**
     * generates price column
     */
    @Column()
    @IsNumber()
    @ApiProperty()
    price: number;

    /**
    * generates screenNo column
    */
    @Column()
    @IsNumber()
    @ApiProperty()
    screenNo: number;

    /**
     * generates boxPrice column
     */
    @Column()
    @IsString()
    @ApiProperty()
    status: string;

    /**
     * generates createdAt column
     */
    @Column()
    @IsString()
    createdAt: string;

    /**
     * generates createTime column
     */
    @Column()
    @IsString()
    createTime: string;


    /**
     * many-to-one between user and payment
     */
    @ManyToOne(() => User, (user) => user.payment, {
        cascade: true
    })
    @JoinColumn()
    user: User;

    /**
   * many-to-one between theater and payment
   */
    @ManyToOne(() => Theater, (theater) => theater.payment, {
        cascade: true
    })
    @JoinColumn()
    theater: Theater;

}