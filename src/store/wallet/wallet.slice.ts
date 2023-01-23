import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCashIn, TCashOut } from '../../types/types';
import { walletMock } from './__mock__/wallet.mock';
import { TWalletState } from './wallet.types';

const initialState: TWalletState = {
  wallet: walletMock,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    sendToCashIn: (state, action: PayloadAction<TCashIn>) => {
      state.wallet[50] -= action.payload[50];
      state.wallet[100] -= action.payload[100];
      state.wallet[500] -= action.payload[500];
      state.wallet[1000] -= action.payload[1000];
    },
    addFromCashOut: (state, action: PayloadAction<TCashOut>) => {
      state.wallet[1] += action.payload[1];
      state.wallet[5] += action.payload[5];
      state.wallet[10] += action.payload[10];
      state.wallet[50] += action.payload[50];
      state.wallet[100] += action.payload[100];
      state.wallet[500] += action.payload[500];
    },
  },
});

export const walletActions = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
