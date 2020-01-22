import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { IUser } from "./IUser";

@Entity()
export class User implements IUser {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({ unique: true, nullable: false })
    username: string

    @Column({ nullable: false })
    password: string

    @CreateDateColumn()
    createDate: Date

    @UpdateDateColumn()
    updateDate: Date

}
