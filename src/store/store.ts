import { configureStore } from '@reduxjs/toolkit';
import { cashInReducer } from './slices/cashin/cashin.slice';
import { vMachineReducer } from './slices/VMachine/vmachine.slice';
import { walletReducer } from './slices/wallet/wallet.slice';

export const store = configureStore({
  reducer: {
    vMachine: vMachineReducer,
    wallet: walletReducer,
    cashIn: cashInReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
