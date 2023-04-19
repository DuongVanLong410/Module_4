import {Category} from "../entity/category";

class CategoryService {
    constructor() {
    }

    getAll = async () => {
        let listProduct = await Category.find();
        return listProduct;
    }

}

export default new CategoryService();