import { ProductModel } from "../models/product-model";

const DEFAULT_VARIANT_INDEX = 0;

export class CartUtils {
  /**
   * calculateCartValue returns the current cart value based on the DEFAULT
   * variant index. This would become a property of the cart (of course) if
   * the test app was to be enhanced to allow variant selection.
   * @param products An array of added products.
   * @returns A number that represents the currency value of the cart.
   */
   static calculateCartValue( products: Array<ProductModel>, variantIndex: number = DEFAULT_VARIANT_INDEX): number {
    let result = 0;
    products.forEach( (product: ProductModel) => {
      result += +(product.variants[variantIndex].price);
    });
    return result;
  }
}
