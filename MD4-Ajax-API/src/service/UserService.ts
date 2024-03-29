import {User} from "../model/user";
import {AppDataSource} from "../data-source";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class UserService{
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }

    register = async (user) =>{
        console.log(user,1)
        let userCheck = await this.userRepository.findOneBy({username: user.username})
        if (!userCheck) {
            user.password = await bcrypt.hash(user.password,10);
            console.log(user)
            return this.userRepository.save(user);
        }
        return 'Username registered';
    }

    getAll = async () => {
        let users = await this.userRepository.find();
        return users;
    }

    checkUser = async (user)=> {
        let userCheck = await this.userRepository.findOneBy({username : user.username} );
        if (!userCheck){
            return 'Username is not existed';
        }
        let comparePassword = await bcrypt.compare(user.password, userCheck.password);
        if(!comparePassword){
            return 'Password is wrong';
        } else {
            let payload = {
                username: userCheck.username,
                idUser: userCheck.id,
                role: userCheck.role
            }
            let secret = '123456';
            let check ={
                username: userCheck.username,
                idUser: userCheck.id,
                role: userCheck.role,
                token: await jwt.sign(payload, secret, {
                    expiresIn: 360000
                })
            }
            return check

        }
    }

    save = async (user) => {
        // console.log(users)
        return  this.userRepository.save(user);
    }
}
export default new UserService();