import promotionService from '../services/promotionService';
import { Request, Response } from 'express';
import { Product } from '../entity/products';

class PromotionController {
    constructor(){}

    async getAll(req:Request, res:Response){
        let allPromo= await promotionService.getAll()
        res.status(200).json(allPromo)
    }
    async save(req:Request, res:Response){
        await promotionService.add(req.body)
        res.status(200).json({message:"them oke"})
    }
    async remove(req:Request, res:Response){
        await promotionService.remove(req.query.id)
        res.status(200).json({message:"xoa oke"})
    }
    async getById(req:Request, res:Response){
        let sale = await promotionService.getById(req.query.id)
        res.status(200).json(sale)
    }
    async update(req:Request,res:Response){
        await promotionService.update(req.query.id,req.body)
        res.status(200).json({message:"úp đết bu'"})
    }
}
export default new PromotionController();