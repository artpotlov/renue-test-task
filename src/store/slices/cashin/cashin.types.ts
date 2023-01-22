import { TCashIn } from '../../../types/types';

export type TCashInState = {
  total: number;
  cashInMoney: TCashIn;
};

export type TCashInPayload = {
  par: '50' | '100' | '500' | '1000';
  count: number;
};
