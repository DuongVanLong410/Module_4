import { Product } from './../entity/products';
import { Promotion } from './../entity/promotion';
import AppDataSource from "../dataSource";

class PromotionService {
    private promotionRepository; productRepository
    constructor(){
        this.promotionRepository= AppDataSource.getRepository(Promotion);
        this.productRepository= AppDataSource.getRepository(Product);
    }
    async getAll(){
        return (await this.promotionRepository.find({
            relations: {
                products: true,
            },
        }));
    }

    async remove(id){
        await this.promotionRepository.delete({id})
    }

    async add(promotion){
        let productId=promotion.products
        let products = await this.productRepository
        .createQueryBuilder("product")
        .where("product.id IN (:...productId)",{productId})
        .getMany()
        promotion.products = products
        await this.promotionRepository.save(promotion)
    }
    async getById(id){
        return (await this.promotionRepository.findOne({
            relations: {
                products: true,
            },
            where: { id: id },
          }));
    }
    async update(id, newSale){
        await this.promotionRepository.update(id,{
            name:newSale.name, discount:newSale.discount
        })
    }
}
export default new PromotionService();