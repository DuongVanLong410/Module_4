import {Product} from "../enitity/product";
import {AppDataSource} from "../data-source";
import {ILike, Like} from "typeorm";

class ProductService {
    private productRepository;

    constructor() {
        this.productRepository = AppDataSource.getRepository(Product)
    }

    getAll = async () => {
        let products = await this.productRepository.find({
            relations: {
                category: true,
            }
        });
        return products;
    }

    add = async (product) => {
        console.log(product)
        await this.productRepository.save(product);
    }

    async update(id,newProduct){
        await this.productRepository.update(id,newProduct)
    }

    async remove(id){
        await this.productRepository.delete(id)
    }
    async findOne(id){
        const product = await this.productRepository.findOne({
            relations:["category"],
            where: {id:id},
        })
        return product;
    }
}

export default new ProductService();