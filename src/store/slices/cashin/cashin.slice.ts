import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCashInPayload, TCashInState } from './cashin.types';

const initialState: TCashInState = {
  total: 0,
  cashInMoney: {
    '50': 0,
    '100': 0,
    '500': 0,
    '1000': 0,
  },
};

const cashInSlice = createSlice({
  name: 'cashIn',
  initialState,
  reducers: {
    setCashIn: (state, action: PayloadAction<TCashInPayload>) => {
      state.cashInMoney[action.payload.par] = action.payload.count;
      state.total = Object.entries(state.cashInMoney).reduce(
        (acc, cur) => acc + Number(cur[0]) * cur[1],
        0,
      );
    },
    clearAll: (state) => {
      state.total = 0;
      state.cashInMoney = {
        '50': 0,
        '100': 0,
        '500': 0,
        '1000': 0,
      };
    },
  },
});

export const cashInActions = cashInSlice.actions;
export const cashInReducer = cashInSlice.reducer;
