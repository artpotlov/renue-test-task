import { Button, HStack, Input, Stack, Text } from '@chakra-ui/react';
import React, { useLayoutEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { cashInActions } from '../../store/slices/cashin/cashin.slice';
import { selectCashIn } from '../../store/slices/cashin/cashin.selector';

type TProps = {
  name: string;
  par: '50' | '100' | '500' | '1000';
  balance: number;
};

export const CashInControl = ({ name, par, balance }: TProps) => {
  const [currentBalance, setCurrentBalance] = useState(balance);
  const { cashInMoney } = useAppSelector(selectCashIn);
  const { setCashIn } = cashInActions;
  const dispatch = useAppDispatch();

  const checkCurrentCount = (value: number) => {
    if (value > balance) {
      setCurrentBalance(0);
      dispatch(setCashIn({ par, count: balance }));
      return;
    }

    if (value < 0) {
      setCurrentBalance(balance);
      dispatch(setCashIn({ par, count: 0 }));
      return;
    }

    setCurrentBalance(balance - value);
    dispatch(setCashIn({ par, count: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkCurrentCount(Number(e.target.value));
  };

  const handleClickBtn = (type: 'inc' | 'dec') => {
    if (type === 'inc' && cashInMoney[par] + 1 <= balance) {
      dispatch(setCashIn({ par, count: cashInMoney[par] + 1 }));
      setCurrentBalance((prev) => prev - 1);
    }

    if (type === 'dec' && cashInMoney[par] - 1 >= 0) {
      dispatch(setCashIn({ par, count: cashInMoney[par] - 1 }));
      setCurrentBalance((prev) => prev + 1);
    }
  };

  useLayoutEffect(() => {
    checkCurrentCount(cashInMoney[par]);
  }, [balance]);

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
      <Text fontSize="sm">Доступно: {currentBalance}</Text>
    </Stack>
  );
};
