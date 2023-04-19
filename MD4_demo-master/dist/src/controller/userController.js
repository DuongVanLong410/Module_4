"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            res.render('users/login');
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map