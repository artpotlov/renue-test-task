import { TCashIn, TCatalogProduct, TMoney } from '../../../types/types';

export type TVMachineState = {
  cashInTotal: number;
  cashOutTotal: number;
  balance: TMoney;
  products: TCatalogProduct[];
};

export type TVMachineCashInPayload = {
  cashIn: TCashIn;
  total: number;
};

export type TVMachineBuyPayload = {
  product: TCatalogProduct;
};
