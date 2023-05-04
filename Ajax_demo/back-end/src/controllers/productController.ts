import  productService from '../services/productService';
import { Request, Response } from 'express';

class ProductController {
    constructor(){
    }

    async getAllProduct(req:Request,res:Response){
        let products= await productService.getAll()
        res.status(200).json(products);
    }

    async create(req:Request,res:Response){
        let product = req.body
        await productService.create(product)
        res.status(200).json({message:"cờ ri ết bu'"})
    }

    async update(req:Request,res:Response){
        let id = req.query.id
        let newProduct = req.body 
        await productService.update(id,newProduct)
        res.status(200).json({message:"úp đết bu'"})
    }

    async getProduct(req:Request,res:Response){
        let id = req.query.id
        let product = await productService.findOne(id)
        res.status(200).json(product);
    }
    async remove(req:Request,res:Response){
        await productService.remove(req.query.id)
        res.status(200).json({message:" đe le te bu'"})
    }
}   
export default new ProductController();