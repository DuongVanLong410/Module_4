import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn,ManyToMany,JoinTable} from "typeorm";
import {Product} from "./products"
@Entity()
export class Promotion{
@PrimaryGeneratedColumn()
id:number;

@Column({type:"varchar"})
name:string;

@Column({type:"int"})
discount:number;

@ManyToMany(() => Product)
@JoinTable()
products: Product[]
}