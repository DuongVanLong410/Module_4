import {Request, Response} from "express";
import productService from "../service/productService";
import categoryService from "../service/CategoryService";

class ProductController {
    private productService;
    private categoryService;

    constructor() {
        this.productService = productService;
        this.categoryService = categoryService;
    }

    findAll = async (req: Request, res: Response) => {
        let listProduct = await this.productService.getAll();
        // json/xml
        res.status(200).json(listProduct)
    }


    addProduct = async (req: Request, res: Response) => {
        await this.productService.add(req.body);
        if (!req.body.name) {
            res.status(400).json({
                message: 'name missing'
            })
            res.end();
        } else {
            res.status(201).json({
                message: 'OK'
            })
        }
    }

    async update(req:Request,res:Response){
        let id = req.params.id
        console.log(id)
        let newProduct = req.body
        await productService.update(id,newProduct)
        res.status(200).json({message:"updated successfully"})
    }

    async remove(req:Request,res:Response){
        await productService.remove(req.params.id)
        res.status(200).json({message:"deleted successfully"})
    }
    async getProduct(req:Request,res:Response){
        let id = req.params.id
        let product = await productService.findOne(id)
        res.status(200).json(product)
    }

}

export default new ProductController();