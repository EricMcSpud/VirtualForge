import { ProductVariantModel } from "./product-variant-model";
import { ProductImageModel } from "./product-image-model";
import { ProductOptionModel } from "./product-option-model";

export interface ProductModel {
    id: number,
    title: string,
    handle: string,
    body_html: string,
    published_at: string,
    created_at: string,
    updated_at: string,
    vendor: string,
    product_type: string,
    tags: string[],
    variants: ProductVariantModel[],
    images: ProductImageModel[],
    options: ProductOptionModel[]
}