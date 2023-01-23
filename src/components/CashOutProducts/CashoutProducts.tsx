import { Flex, Text } from '@chakra-ui/react';
import { useAppSelector } from '../../hooks/redux';
import { selectCashOut } from '../../store/cashout/cashout.selector';
import { PurchaseCard } from '../PurchaseCard';

export const CashOutProducts = () => {
  const { total, restProducts } = useAppSelector(selectCashOut);
  const isInStock = restProducts.length > 0;
  return isInStock ? (
    <>
      <Text fontWeight="bold" mb={4}>
        В качестве сдачи будут выданы следующие товары
      </Text>
      <Flex maxH="320px" flexWrap="wrap" gap="30px" overflow="auto">
        {restProducts.map((product) => (
          <PurchaseCard key={product.id} product={product} />
        ))}
      </Flex>
      {total > 0 && (
        <Text mt={4}>
          Остаток <b>{total}</b> не может быть выдан монетами или товарами. Данный остаток будет
          зачислен на баланс аппарата.
        </Text>
      )}
    </>
  ) : (
    <Text>
      Невозможно выдать сдачу. Остаток <b>{total}</b> будет зачислен на баланс аппарата.
    </Text>
  );
};
