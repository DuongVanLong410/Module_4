import {Router} from "express";
import productController from "../controller/productController";

const router = Router();
router.get('/products', productController.findAll);
router.get('/create', productController.showFormAdd);
router.post('/create', productController.addProduct)
export default router;