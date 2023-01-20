import { Button, HStack, Input, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { cashInActions } from '../../store/slices/cashin/cashin.slice';

type TProps = {
  name: string;
  par: '50' | '100' | '500' | '1000';
  balance: number;
};

export const CashInControl = ({ name, par, balance }: TProps) => {
  const [currentBalance, setCurrentBalance] = useState(balance);
  const [currentCount, setCurrentCount] = useState(0);
  const { setCashIn } = cashInActions;
  const dispatch = useAppDispatch();

  const checkCurrentCount = (value: number) => {
    if (value > balance) {
      setCurrentCount(balance);
      setCurrentBalance(0);
      dispatch(setCashIn({ par, count: balance }));
      return;
    }

    if (value < 0) {
      setCurrentCount(0);
      setCurrentBalance(balance);
      dispatch(setCashIn({ par, count: 0 }));
      return;
    }

    setCurrentCount(value);
    setCurrentBalance(balance - value);
    dispatch(setCashIn({ par, count: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkCurrentCount(Number(e.target.value));
  };

  const handleClick = (type: 'inc' | 'dec') => {
    if (type === 'inc' && currentCount + 1 <= balance) {
      setCurrentCount((prev) => {
        dispatch(setCashIn({ par, count: prev + 1 }));
        return prev + 1;
      });
      setCurrentBalance((prev) => prev - 1);
    }

    if (type === 'dec' && currentCount - 1 >= 0) {
      setCurrentCount((prev) => {
        dispatch(setCashIn({ par, count: prev - 1 }));
        return prev - 1;
      });
      setCurrentBalance((prev) => prev + 1);
    }
  };

  useEffect(() => {
    checkCurrentCount(currentCount);
  }, [balance]);

  return (
    <Stack spacing={2}>
      <Text fontWeight="bold">{name}</Text>
      <HStack spacing={2}>
        <Button onClick={() => handleClick('dec')}>-</Button>
        <Input
          type="number"
          w="80px"
          placeholder="0"
          textAlign="center"
          value={currentCount}
          onChange={handleInputChange}
        />
        <Button onClick={() => handleClick('inc')}>+</Button>
      </HStack>
      <Text fontSize="sm">Доступно: {currentBalance}</Text>
    </Stack>
  );
};
