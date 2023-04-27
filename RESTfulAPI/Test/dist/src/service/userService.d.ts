import { User } from "../enitity/user";
declare class UserService {
    private userRepository;
    constructor();
    checkUser: (user: any) => Promise<any>;
    createUser: (user: User) => Promise<void>;
}
declare const _default: UserService;
export default _default;
