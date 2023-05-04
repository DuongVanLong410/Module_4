import express from 'express';
import productController from '../controllers/productController';
let productRouter = express.Router();

productRouter.get('/listProducts', productController.getAllProduct)
productRouter.post('/create', productController.create)
productRouter.post('/update', productController.update)
productRouter.get('/update', productController.getProduct)
productRouter.get('/delete', productController.remove)

export default productRouter;