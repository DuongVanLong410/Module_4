import {Router} from "express";
import productController from "../controller/productController";
import router from "./router";

const productRouter = Router();

productRouter.get('/', productController.findAll);
productRouter.get('/create', productController.showFormAdd);
productRouter.post('/create', productController.addProduct);
productRouter.get('/edit/:id',productController.showProductEdit);
productRouter.post('/edit/:id',productController.updateProductEdit);
productRouter.get('/delete/:id',productController.showDeleteProduct);
productRouter.post('/delete/:id',productController.deleteProduct);

export default productRouter