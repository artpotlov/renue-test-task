import { configureStore } from '@reduxjs/toolkit';
import { cashInReducer } from './slices/cashin/cashin.slice';
import { cashoutReducer } from './slices/cashout/cashout.slice';
import { purchasesReducer } from './slices/purchases/purchases.slice';
import { vMachineReducer } from './slices/VMachine/vmachine.slice';
import { walletReducer } from './slices/wallet/wallet.slice';

export const store = configureStore({
  reducer: {
    vMachine: vMachineReducer,
    wallet: walletReducer,
    cashIn: cashInReducer,
    cashOut: cashoutReducer,
    purchases: purchasesReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
