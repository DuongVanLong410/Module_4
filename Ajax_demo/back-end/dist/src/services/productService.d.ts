declare class productService {
    private productRepository;
    constructor();
    getAll(): Promise<any>;
    create(product: any): Promise<void>;
    update(id: any, newProduct: any): Promise<void>;
    findOne(id: any): Promise<any>;
    remove(id: any): Promise<void>;
}
declare const _default: productService;
export default _default;
