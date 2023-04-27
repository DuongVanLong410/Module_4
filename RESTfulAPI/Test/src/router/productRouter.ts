import {Router} from "express";
import productController from "../controller/productController";

const productRouter = Router();
productRouter.get('/', productController.findAll);
productRouter.post('/', productController.addProduct);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.remove);
productRouter.get('/:id', productController.getProduct)
export default productRouter;