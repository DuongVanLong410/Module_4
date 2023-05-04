import { Product } from "../entity/products";
import AppDataSource from "../dataSource";

class productService{
    private productRepository
    constructor(){
        this.productRepository= AppDataSource.getRepository(Product);
    }

    async getAll(){
        let products = await this.productRepository.find({
            relations: {
                category: true,
            },
        });
        return products;
    }

    async create(product){
        await this.productRepository.save(product)
    }

    async update(id,newProduct){
        await this.productRepository.update(id,newProduct)
    }

    async findOne(id){
            const product = await this.productRepository.findOne({
              relations: ["category"],
              where: { id: id },
            });
            return product;
    }

    async remove(id){
        await this.productRepository.delete(id)
    }
}
export default new productService();