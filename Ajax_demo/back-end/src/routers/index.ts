import {Router} from "express";
import productRouter from "./productRouter";
import promotionRouter from "./promotionRouter";
const router = Router();
router.use('/',productRouter)
router.use('/promotion',promotionRouter)
export default router;