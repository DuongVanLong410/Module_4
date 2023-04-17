declare class ProductService {
    constructor();
    getAll: () => {
        name: string;
        price: number;
        quantity: number;
        image: string;
    }[];
    add: (product: any) => void;
}
declare const _default: ProductService;
export default _default;
