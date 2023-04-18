import {Router} from "express";
import productController from "../controller/productController";

const router = Router();
router.get('/products', productController.findAll);
router.get('/create', productController.showFormAdd);
router.post('/create', productController.addProduct);
router.get('/edit/:id',productController.showProductEdit);
router.post('/edit/:id',productController.updateProductEdit);
router.get('/delete/:id',productController.showDeleteProduct);
router.post('/delete/:id',productController.deleteProduct);
export default router;