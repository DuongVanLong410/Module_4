import {Request, Response} from "express";
import productService from "../service/productService";

class ProductController {
    private productService;

    constructor() {
        this.productService = productService;
    }

    findAll = (req: Request, res: Response) => {
        let listProduct = this.productService.getAll();
        res.render('index', {products: listProduct});
    }

    showFormAdd = (req: Request, res: Response) => {
        res.render('products/create')
    }

    addProduct = (req: Request, res: Response) => {
        this.productService.add(req.body);
        res.redirect(301, '/products')
    }


}

export default new ProductController();