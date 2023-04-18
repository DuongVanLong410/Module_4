import {Request, Response} from "express";
import UserService from "../service/UserService";
import OrderService from "../service/OrderService";

class UserController {

    showFormLogin = async (req: Request, res: Response) => {
        await UserService.getAll();
        res.render('users/login')// read file
    }

    register = async (req: Request,res: Response) => {
        console.log(req.body, 2222222)
        let user = await UserService.register(req.body)
        res.status(201).json(user)
    }

    login = async (req: Request, res: Response)=>{
        let response = await UserService.checkUser(req.body);
        res.status(200).json(response)
    }

    logout = async (req: Request, res: Response) => {
        await OrderService.updateOrderStatus();
        // @ts-ignore
        req.session.destroy((err)=>{
            return  res.redirect('/users/login')
        })

    }
    formSignup = async (req: Request, res: Response) => {
        res.render('users/signup')// read file
    }
    signup = async (req: Request, res: Response) => {
        let user = req.body;
                await UserService.save(user);
                res.redirect(301, '/home');

    }

}

export default new UserController();