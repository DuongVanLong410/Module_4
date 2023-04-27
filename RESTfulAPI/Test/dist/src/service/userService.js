"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../enitity/user");
const data_source_1 = require("../data-source");
class UserService {
    constructor() {
        this.checkUser = async (user) => {
            let userFind = await this.userRepository.findOneBy({ username: user.username, password: user.password });
            return userFind;
        };
        this.createUser = async (user) => {
            await this.userRepository.save(user);
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map