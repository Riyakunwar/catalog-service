import { Product } from './product.entity';
export declare class Variant {
    id: number;
    name: string;
    description: string;
    price: number;
    sku: string;
    product: Product;
}
