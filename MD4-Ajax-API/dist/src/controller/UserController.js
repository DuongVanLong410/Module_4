"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../service/UserService"));
const OrderService_1 = __importDefault(require("../service/OrderService"));
class UserController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            await UserService_1.default.getAll();
            res.render('users/login');
        };
        this.register = async (req, res) => {
            console.log(req.body, 2222222);
            let user = await UserService_1.default.register(req.body);
            res.status(201).json(user);
        };
        this.login = async (req, res) => {
            let response = await UserService_1.default.checkUser(req.body);
            res.status(200).json(response);
        };
        this.logout = async (req, res) => {
            await OrderService_1.default.updateOrderStatus();
            req.session.destroy((err) => {
                return res.redirect('/users/login');
            });
        };
        this.formSignup = async (req, res) => {
            res.render('users/signup');
        };
        this.signup = async (req, res) => {
            let user = req.body;
            await UserService_1.default.save(user);
            res.redirect(301, '/home');
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map