import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCashIn, TMoney } from '../../../types/types';
import { walletMock } from './__mock__/wallet.mock';

type TState = {
  wallet: TMoney;
};

const initialState: TState = {
  wallet: walletMock,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    subCashIn: (state, action: PayloadAction<TCashIn>) => {
      state.wallet[50] -= action.payload[50];
      state.wallet[100] -= action.payload[100];
      state.wallet[500] -= action.payload[500];
      state.wallet[1000] -= action.payload[1000];
    },
  },
});

export const walletActions = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
