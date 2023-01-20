import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TVMachineBuyPayload, TVMachineCashInPayload, TVMachineState } from './vmachine.types';
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
    buy: (state, action: PayloadAction<TVMachineBuyPayload>) => {
      const index = state.products.findIndex((p) => p.id === action.payload.productID);
      const productName = state.products[index].name;
      const price = state.products[index].price;
      const toast = action.payload.toastFn;

      if (state.cashOutTotal < price) {
        toast('Ошибка', 'Недостаточно средств для покупки');
        return;
      }

      state.products[index].count -= 1;
      state.cashOutTotal -= price;
      toast('Покупка', `Товар ${productName} успешно приобретен!`);
    },
  },
});

export const vMachineActions = VMachineSlice.actions;
export const vMachineReducer = VMachineSlice.reducer;
