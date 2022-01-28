/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { IsEmail, IsNumber, IsString } from "class-validator";
import { Theater } from './theater.entity';

/* eslint-disable prettier/prettier */

/**
 * starting of Movies Entity
 */
@Entity()
export class Movies {

    /**
     * auto incremental id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * generates language column
     */
    @Column()
    @IsString()
    @ApiProperty()
    language: string;

    /**
    * generates movieName column
    */
    @Column()
    @IsEmail()
    @ApiProperty()
    movieName: string;

    /**
     * generates screenNo column
     */
    @Column()
    @IsString()
    @ApiProperty()
    screenNo: number;


    /**
     * generates rating column
     */
    @Column()
    @IsNumber()
    @ApiProperty()
    rating: number;

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
    @ManyToMany(() => Theater, theater => theater.movies, {
        cascade: true
    })
    @JoinTable()
    theaters: Theater[];
}