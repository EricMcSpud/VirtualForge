import { ProductSorterPipe } from './product-sorter.pipe';

describe('ProductSorterPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductSorterPipe();
    expect(pipe).toBeTruthy();
  });
});
