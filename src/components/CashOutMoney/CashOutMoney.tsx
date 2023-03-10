import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import CoinImage from '../../assets/coin.png';
import { useAppSelector } from '../../hooks/redux';
import { selectCashOut } from '../../store/cashout/cashout.selector';
import { selectVMachine } from '../../store/vmachine/vmachine.selector';

export const CashOutMoney = () => {
  const { restMoney } = useAppSelector(selectCashOut);
  const { cashOutTotal } = useAppSelector(selectVMachine);

  return (
    <>
      <Flex gap="30px">
        <Image src={CoinImage} alt='Coin image' w="100px" h="100px" />
        <Stack spacing={4}>
          <Text fontWeight="bold">Будут выданы следующие монеты:</Text>
          <Box>
            {Object.entries(restMoney).map((el) => (
              <Text key={el[0]} mb={2}>
                <b>Номинал {el[0]}</b> - {el[1]} монет
              </Text>
            ))}
          </Box>
          <Text>
            <b>Итого:</b> {cashOutTotal}
          </Text>
        </Stack>
      </Flex>
    </>
  );
};
