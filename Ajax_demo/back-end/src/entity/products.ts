import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Category } from "./category";
@Entity()
export class Product {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar"})
    name:string

    @Column({type:"int"})
    price:number;
    
    @Column({type:"int"})
    quantity:number;

    @Column({type:"text"})
    img:string;

    @ManyToOne(() => Category , (category) => category.products)
    category:number;
}