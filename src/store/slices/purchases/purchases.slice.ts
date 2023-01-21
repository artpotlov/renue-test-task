import { createSlice } from '@reduxjs/toolkit';
import { vMachineActions } from '../VMachine/vmachine.slice';
import { TPurchsesState } from './purchses.types';

const initialState: TPurchsesState = {
  products: [],
};

const purchasesSlice = createSlice({
  name: 'purchases',
  initialState,
  reducers: {
    clearPurchases: (state) => {
      state.products.length = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(vMachineActions.buy, (state, action) => {
        const newProduct = action.payload;
        const index = state.products.findIndex((p) => p.id === newProduct.id);

        if (index === -1) {
          state.products.push({
            id: newProduct.id,
            name: newProduct.name,
            volume: newProduct.volume,
            image: newProduct.image,
            count: 1,
          });
          return;
        }

        state.products[index].count += 1;
      })
      .addCase(vMachineActions.subProducts, (state, action) => {
        action.payload.forEach((product) => {
          const index = state.products.findIndex((p) => p.id === product.id);

          if (index === -1) {
            state.products.push({
              id: product.id,
              name: product.name,
              volume: product.volume,
              image: product.image,
              count: product.count,
            });
            return;
          }

          state.products[index].count += product.count;
        });
      });
  },
});

export const purchasesActions = purchasesSlice.actions;
export const purchasesReducer = purchasesSlice.reducer;
