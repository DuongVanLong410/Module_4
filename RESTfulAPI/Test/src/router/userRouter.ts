import {Router} from "express";
import userController from "../controller/userController";

const userRouter = Router();
userRouter.get('/login',userController.showFormLogin)
userRouter.post('/login',userController.login)
userRouter.get('/register',userController.showFormRegister)
userRouter.post('/register',userController.register)

export default userRouter