import { TCashOut } from '../types/types';

export const getChange = (total: number, balance: TCashOut) => {
  const tempBalance = { ...balance };
  const resultCashOut: TCashOut = {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
    5: 0,
    1: 0,
  };

  while (true) {
    if (tempBalance[500] > 0 && total >= 500) {
      total -= 500;
      tempBalance[500] -= 1;
      resultCashOut[500] += 1;
      continue;
    }

    if (tempBalance[100] > 0 && total >= 100) {
      total -= 100;
      tempBalance[100] -= 1;
      resultCashOut[100] += 1;
      continue;
    }

    if (tempBalance[50] > 0 && total >= 50) {
      total -= 50;
      tempBalance[50] -= 1;
      resultCashOut[50] += 1;
      continue;
    }

    if (tempBalance[10] > 0 && total >= 10) {
      total -= 10;
      tempBalance[10] -= 1;
      resultCashOut[10] += 1;
      continue;
    }

    if (tempBalance[5] > 0 && total >= 5) {
      total -= 5;
      tempBalance[5] -= 1;
      resultCashOut[5] += 1;
      continue;
    }

    if (tempBalance[1] > 0 && total >= 1) {
      total -= 1;
      tempBalance[1] -= 1;
      resultCashOut[1] += 1;
    } else {
      break;
    }
  }

  if (total > 0) {
    return { status: 'error', total, resultCashOut };
  }

  return { status: 'success', total, resultCashOut };
};
