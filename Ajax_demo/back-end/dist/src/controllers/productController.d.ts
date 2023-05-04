import { Request, Response } from 'express';
declare class ProductController {
    constructor();
    getAllProduct(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    getProduct(req: Request, res: Response): Promise<void>;
    remove(req: Request, res: Response): Promise<void>;
}
declare const _default: ProductController;
export default _default;
