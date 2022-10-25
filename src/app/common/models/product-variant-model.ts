import { ProductImageModel } from "./product-image-model";

export interface ProductVariantModel {
    id: number,
    title: string,
    option1: string,
    option2: string,
    option3: string,
    sku: string,
    rquires_shipping: boolean,
    taxable: boolean,
    featured_image: ProductImageModel,
    available: boolean,
    price: string,
    grams: number,
    compare_at_price: string,
    position: number,
    product_id: number,
    created_at: string,
    updated_at: string
}