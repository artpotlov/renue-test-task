import { Button, Flex, Image, Text, useToast } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { vMachineActions } from '../../store/slices/vmachine/vmachine.slice';
import { TCatalogProduct } from '../../types/types';
import { selectVMachine } from '../../store/slices/vmachine/vmachine.selector';

type TProps = {
  product: TCatalogProduct;
};

export const CatalogCard = ({ product }: TProps) => {
  const { image, name, volume, count, price } = product;
  const { products, cashOutTotal } = useAppSelector(selectVMachine);
  const { buy } = vMachineActions;
  const dispatch = useAppDispatch();
  const toast = useToast();

  const handleBuyBtnClick = () => {
    const stateProduct = products.find((p) => p.id === product.id);

    if (cashOutTotal < product.price) {
      toast({
        title: 'Недостаточно средств',
        description: 'Недостаточно средств для совершения покупки',
        status: 'error',
      });

      return;
    }

    if (stateProduct && stateProduct.count === 0) {
      toast({
        title: 'Недостаточное количество',
        description: `Недостаточное количество продукта ${product.name}`,
        status: 'error',
      });

      return;
    }

    dispatch(buy(product));

    toast({
      title: 'Успешная покупка',
      description: `Товар ${product.name} успешно приобретен`,
      status: 'success',
    });
  };

  return (
    <Flex
      w="200px"
      p={4}
      flexDirection="column"
      alignItems="center"
      bg={count <= 0 ? 'gray.100' : 'white'}
      border="1px"
      borderColor={count <= 0 ? 'gray.200' : 'gray.300'}
      borderRadius={20}
    >
      <Image
        w="90px"
        h="90px"
        src={image}
        alt={name}
        filter={
          count <= 0
            ? 'drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.25)) grayscale(100%)'
            : 'drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.25))'
        }
      />
      <Text fontSize="lg" lineHeight="1" fontWeight="bold" mt="10px" textAlign="center">
        {name}
      </Text>
      <Text fontSize="xs" lineHeight="1" mt="5px" color="gray.500" textAlign="center">
        {volume}
      </Text>
      <Flex justifyContent="space-between" mt="25px" w="100%">
        <Text fontSize="xs" lineHeight="1">
          В наличии
        </Text>
        <Text fontSize="xs" lineHeight="1">
          {count}
        </Text>
      </Flex>
      <Button
        w="100%"
        mt="10px"
        size="sm"
        colorScheme={count <= 0 ? 'red' : 'whatsapp'}
        borderRadius={10}
        isDisabled={count <= 0}
        onClick={handleBuyBtnClick}
      >
        {count <= 0 ? 'Покупка невозможна' : `Купить за ${price}`}
      </Button>
    </Flex>
  );
};
