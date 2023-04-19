import {Router} from "express";
import productController from "../controller/productController";
import productRouter from "./product-router";

const router = Router();
router.use('/products',productRouter)
export default router;