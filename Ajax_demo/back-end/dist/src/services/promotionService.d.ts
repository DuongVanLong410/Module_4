declare class PromotionService {
    private promotionRepository;
    productRepository: any;
    constructor();
    getAll(): Promise<any>;
    remove(id: any): Promise<void>;
    add(promotion: any): Promise<void>;
    getById(id: any): Promise<any>;
    update(id: any, newSale: any): Promise<void>;
}
declare const _default: PromotionService;
export default _default;
