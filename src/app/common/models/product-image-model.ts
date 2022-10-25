export interface ProductImageModel {
    id: number,
    product_id: number,
    position: number,
    created_at: string,
    updated_at: string,
    variant_ids: number[],
    src: string,
    alt?: string,
    width: number,
    height: number
}