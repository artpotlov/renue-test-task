import { TCashOut, TCatalogProduct } from '../../../types/types';

export type TCashOutState = {
  status: 'money' | 'products' | null;
  total: number;
  restMoney: TCashOut;
  restProducts: TCatalogProduct[];
};

export type TCashOutMoneyPayload = {
  cashOutMoney: TCashOut;
};

export type TCashOutProductPayload = {
  total: number;
  cashOutProducts: TCatalogProduct[];
};
