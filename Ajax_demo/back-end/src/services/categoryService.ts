import { Category } from './../entity/category';
import AppDataSource from "../dataSource";

class CategoryService {
    private categoryRepository;
    constructor(){
        this.categoryRepository = AppDataSource.getRepository(Category)
    }

    async getAll(){
        let categories = await this.categoryRepository.find();
        return categories;
    }
}

export default new CategoryService();