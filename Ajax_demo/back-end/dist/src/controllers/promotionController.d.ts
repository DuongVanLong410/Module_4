import { Request, Response } from 'express';
declare class PromotionController {
    constructor();
    getAll(req: Request, res: Response): Promise<void>;
    save(req: Request, res: Response): Promise<void>;
    remove(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
}
declare const _default: PromotionController;
export default _default;
