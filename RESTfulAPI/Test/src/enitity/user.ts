//entity user.ts
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export interface IUser {
    username ?: string;
    password ?: string;
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar'})
    username: string;
    @Column({type: 'varchar'})
    password: string
}
