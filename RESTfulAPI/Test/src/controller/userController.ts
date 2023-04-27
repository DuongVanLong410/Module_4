import {Request, Response} from "express";
import {User} from "../enitity/user";
import userService from "../service/userService";

class UserController {

    private userService;
    constructor() {
        this.userService = userService;
    }

    showFormLogin = async (req: Request, res: Response) => {
        res.render('users/login');
    }

    login = async (req: Request, res: Response) => {
        let user = await this.userService.checkUser(req.body);
        if(!user) {
            res.redirect(301, '/users/login')
        } else {
            req.session['user'] = user;
            res.redirect(301, '/products');
        }
    }

    showFormRegister = async (req: Request, res: Response) => {
        res.render('users/register');
    }

    register = async (req: Request, res: Response) => {
        try {
            const {username, password} = req.body;
            const user = new User();
            user.username = username;
            user.password = password;
            await this.userService.createUser(user);
            res.redirect('/users/login');
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).send('Error registering user');
        }
    }
}

export default new UserController();
