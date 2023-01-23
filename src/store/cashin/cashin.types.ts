import { TCashIn } from '../../types/types';

export type TCashInState = {
  total: number;
  cashInMoney: TCashIn;
};

export type TCashInPayload = {
  par: keyof TCashIn;
  count: number;
};
