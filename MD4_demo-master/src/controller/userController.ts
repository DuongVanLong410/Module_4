import {Request,Response} from "express";

class UserController {
    constructor() {
    }

    showFormLogin = async (req:Request,res:Response) =>{
        res.render('users/login')
    }
}

export default new UserController()