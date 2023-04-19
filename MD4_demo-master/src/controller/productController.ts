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
        res.render('index', {products: listProduct});
    }

    showFormAdd = async (req: Request, res: Response) => {
        let listCategory = await this.categoryService.getAll()
        res.render('products/create',{categories: listCategory})
    }

    addProduct = (req: Request, res: Response) => {
        this.productService.add(req.body);
        res.redirect(301, '/products')
    }
    showProductEdit = (req: Request, res: Response) => {
        const id = req.params.id;
        let product = productService.findById(id);
        res.render('products/edit', {product: product})
    }
    updateProductEdit = (req: Request, res: Response) => {
        const id = req.params.id;
        const product = req.body;
        productService.update(id,product)
        res.redirect(301,'/products')
    }
    showDeleteProduct = (req: Request, res: Response) => {
        res.render('products/delete')
    }

    deleteProduct = async (req: Request, res: Response) => {
        const id = req.params.id;
        await productService.delete(id)
        res.redirect(301,'/products')
    }
}

export default new ProductController();