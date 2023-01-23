import { configureStore } from '@reduxjs/toolkit';
import { cashInReducer } from './cashin/cashin.slice';
import { cashOutReducer } from './cashout/cashout.slice';
import { purchasesReducer } from './purchases/purchases.slice';
import { vMachineReducer } from './vmachine/vmachine.slice';
import { walletReducer } from './wallet/wallet.slice';

export const store = configureStore({
  reducer: {
    vMachine: vMachineReducer,
    wallet: walletReducer,
    cashIn: cashInReducer,
    cashOut: cashOutReducer,
    purchases: purchasesReducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
