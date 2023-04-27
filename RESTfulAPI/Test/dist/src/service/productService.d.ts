declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<void>;
    update(id: any, newProduct: any): Promise<void>;
    remove(id: any): Promise<void>;
    findOne(id: any): Promise<any>;
}
declare const _default: ProductService;
export default _default;
