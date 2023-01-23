import { Button, HStack, Input, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectCashIn } from '../../store/cashin/cashin.selector';
import { cashInActions } from '../../store/cashin/cashin.slice';
import { TCashIn } from '../../types/types';

type TProps = {
  name: string;
  par: keyof TCashIn;
  walletBalance: number;
};

export const CashInControl = ({ name, par, walletBalance }: TProps) => {
  const [currentWalletBalance, setCurrentWalletBalance] = useState(walletBalance);
  const { cashInMoney } = useAppSelector(selectCashIn);
  const { setCashIn } = cashInActions;
  const dispatch = useAppDispatch();

  const checkCurrentCount = (value: number) => {
    if (value > walletBalance) {
      setCurrentWalletBalance(0);
      dispatch(setCashIn({ par, count: walletBalance }));
      return;
    }

    if (value < 0) {
      setCurrentWalletBalance(walletBalance);
      dispatch(setCashIn({ par, count: 0 }));
      return;
    }

    setCurrentWalletBalance(walletBalance - value);
    dispatch(setCashIn({ par, count: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (isNaN(value)) {
      checkCurrentCount(0);
      return;
    }

    checkCurrentCount(Number(e.target.value));
  };

  const handleClickBtn = (type: 'inc' | 'dec') => {
    if (type === 'inc' && cashInMoney[par] + 1 <= walletBalance) {
      dispatch(setCashIn({ par, count: cashInMoney[par] + 1 }));
      setCurrentWalletBalance((prev) => prev - 1);
    }

    if (type === 'dec' && cashInMoney[par] - 1 >= 0) {
      dispatch(setCashIn({ par, count: cashInMoney[par] - 1 }));
      setCurrentWalletBalance((prev) => prev + 1);
    }
  };

  return (
    <Stack spacing={2}>
      <Text fontWeight="bold">{name}</Text>
      <HStack spacing={2}>
        <Button onClick={() => handleClickBtn('dec')}>-</Button>
        <Input
          type="number"
          w="80px"
          placeholder="0"
          textAlign="center"
          value={cashInMoney[par]}
          onChange={handleInputChange}
        />
        <Button onClick={() => handleClickBtn('inc')}>+</Button>
      </HStack>
      <Text fontSize="sm">Доступно: {currentWalletBalance}</Text>
    </Stack>
  );
};
