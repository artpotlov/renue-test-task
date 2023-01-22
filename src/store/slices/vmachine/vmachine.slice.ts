import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCashOut, TCatalogProduct } from '../../../types/types';
import { TVMachineCashInPayload, TVMachineState } from './vmachine.types';
import { balanceMock } from './__mock__/balance.mock';
import { productsMock } from './__mock__/products.mock';

const initialState: TVMachineState = {
  cashInTotal: 0,
  cashOutTotal: 0,
  balance: balanceMock,
  products: productsMock,
};

const VMachineSlice = createSlice({
  name: 'vmachine',
  initialState,
  reducers: {
    setCashIn: (state, action: PayloadAction<TVMachineCashInPayload>) => {
      state.cashInTotal += action.payload.total;
      state.cashOutTotal += action.payload.total;
      state.balance[50] += action.payload.cashIn[50];
      state.balance[100] += action.payload.cashIn[100];
      state.balance[500] += action.payload.cashIn[500];
      state.balance[1000] += action.payload.cashIn[1000];
    },
    buy: (state, action: PayloadAction<TCatalogProduct>) => {
      const product = action.payload;
      const index = state.products.findIndex((p) => p.id === product.id);
      state.products[index].count -= 1;
      state.cashOutTotal -= product.price;
    },
    subBalance: (state, action: PayloadAction<TCashOut>) => {
      state.cashInTotal = 0;
      state.cashOutTotal = 0;
      state.balance[1] -= action.payload[1];
      state.balance[5] -= action.payload[5];
      state.balance[10] -= action.payload[10];
      state.balance[50] -= action.payload[50];
      state.balance[100] -= action.payload[100];
      state.balance[500] -= action.payload[500];
    },
    subProducts: (state, action: PayloadAction<TCatalogProduct[]>) => {
      const findIndex = (id: number) => state.products.findIndex((p) => p.id === id);

      action.payload.forEach((p) => {
        const index = findIndex(p.id);

        if (index === -1) {
          return;
        }

        state.products[index].count -= p.count;
      });

      state.cashInTotal = 0;
      state.cashOutTotal = 0;
    },
    clearCashInOut: (state) => {
      state.cashInTotal = 0;
      state.cashOutTotal = 0;
    },
  },
});

export const vMachineActions = VMachineSlice.actions;
export const vMachineReducer = VMachineSlice.reducer;
