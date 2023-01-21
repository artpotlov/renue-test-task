export type TProduct = {
  id: number;
  image: string;
  name: string;
  volume: string;
  count: number;
};

export type TCatalogProduct = {
  price: number;
} & TProduct;

export type TMoney = {
  1: number;
  5: number;
  10: number;
  50: number;
  100: number;
  500: number;
  1000: number;
};

export type TCashIn = Omit<TMoney, 1 | 5 | 10>;

export type TCashOut = Omit<TMoney, 1000>;
