import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCashOutMoneyPayload, TCashOutProductPayload, TCashOutState } from './cashout.types';

const initialState: TCashOutState = {
  status: null,
  total: 0,
  money: {
    '1': 0,
    '5': 0,
    '10': 0,
    '50': 0,
    '100': 0,
    '500': 0,
  },
  cProducts: [],
};

const cashOutSlice = createSlice({
  name: 'cashOut',
  initialState,
  reducers: {
    setChangeMoney: (state, action: PayloadAction<TCashOutMoneyPayload>) => {
      state.status = 'money';
      state.money = action.payload.cashOutMoney;
    },
    setChangeProduct: (state, action: PayloadAction<TCashOutProductPayload>) => {
      state.status = 'products';
      state.cProducts = action.payload.cashOutProducts;
      state.total = action.payload.total;
    },
    clearAll: (state) => {
      state.status = null;
      state.money = {
        '1': 0,
        '5': 0,
        '10': 0,
        '50': 0,
        '100': 0,
        '500': 0,
      };
      state.total = 0;
      state.cProducts.length = 0;
    },
  },
});

export const cashOutActions = cashOutSlice.actions;
export const cashoutReducer = cashOutSlice.reducer;
