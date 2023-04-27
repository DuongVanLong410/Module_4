import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Category } from "./category";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "int" })
    price: string;

    @Column({ type: "text" })
    image: string;

    @ManyToOne(() => Category, category => category.products)
    category: Category;
}
