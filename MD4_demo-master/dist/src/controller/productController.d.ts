import { Request, Response } from "express";
declare class ProductController {
    private productService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    showFormAdd: (req: Request, res: Response) => void;
    addProduct: (req: Request, res: Response) => void;
    showProductEdit: (req: Request, res: Response) => void;
    updateProductEdit: (req: Request, res: Response) => void;
    showDeleteProduct: (req: Request, res: Response) => void;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
