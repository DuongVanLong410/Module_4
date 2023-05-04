import { Product } from './products';
import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar"})
    name:string;
    
    @OneToMany (() => Product, (product) => product.category)
    products: Product[]
}