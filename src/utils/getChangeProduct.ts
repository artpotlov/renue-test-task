import { TCatalogProduct } from '../types/types';

export const getChangeProduct = (total: number, products: TCatalogProduct[]) => {
  let i = 0;
  const filteredProducts: TCatalogProduct[] = products
    .map((p) => structuredClone(p))
    .filter((p) => p.count)
    .sort((p1, p2) => p2.price - p1.price);

  const changeProducts: TCatalogProduct[] = filteredProducts.map((p) => {
    const temp: TCatalogProduct = structuredClone(p);
    temp.count = 0;
    return temp;
  });

  while (i < filteredProducts.length) {
    if (total >= filteredProducts[i].price && filteredProducts[i].count > 0) {
      total -= filteredProducts[i].price;
      filteredProducts[i].count -= 1;
      changeProducts[i].count += 1;
      continue;
    }

    i += 1;
  }

  const filteringChangeProducts = changeProducts.filter((p) => p.count > 0);

  if (filteringChangeProducts.length === 0) {
    return { total, cashOutProducts: [] };
  }

  return { total, cashOutProducts: filteringChangeProducts };
};
