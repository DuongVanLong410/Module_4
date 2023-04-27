"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../enitity/user");
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            res.render('users/login');
        };
        this.login = async (req, res) => {
            let user = await this.userService.checkUser(req.body);
            if (!user) {
                res.redirect(301, '/users/login');
            }
            else {
                req.session['user'] = user;
                res.redirect(301, '/products');
            }
        };
        this.showFormRegister = async (req, res) => {
            res.render('users/register');
        };
        this.register = async (req, res) => {
            try {
                const { username, password } = req.body;
                const user = new user_1.User();
                user.username = username;
                user.password = password;
                await this.userService.createUser(user);
                res.redirect('/users/login');
            }
            catch (error) {
                console.error('Error registering user:', error);
                res.status(500).send('Error registering user');
            }
        };
        this.userService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map