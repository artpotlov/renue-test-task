import { Button, Flex, Image, Text, useToast } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectVMachine } from '../../store/selectors/vmachine.selector';
import { vMachineActions } from '../../store/slices/VMachine/vmachine.slice';
import { TCatalogProduct } from '../../types/types';

type TProps = {
  product: TCatalogProduct;
};

export const CatalogCard = ({ product }: TProps) => {
  const { image, name, volume, count, price } = product;
  const toast = useToast();
  const { products, cashOutTotal } = useAppSelector(selectVMachine);
  const { buy } = vMachineActions;
  const dispatch = useAppDispatch();

  const handleClick = () => {
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
      flexDirection="column"
      alignItems="center"
      p="15px"
      bg={count <= 0 ? 'gray.100' : 'white'}
      border="1px"
      borderColor={count <= 0 ? 'gray.200' : 'gray.300'}
      borderRadius={20}
    >
      <Image
        w="100px"
        h="100px"
        src={image}
        alt={name}
        filter={
          count <= 0
            ? 'drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.25)) grayscale(100%)'
            : 'drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.25))'
        }
      />
      <Text fontSize="20px" lineHeight="23px" fontWeight="bold" mt="10px" textAlign="center">
        {name}
      </Text>
      <Text fontSize="10px" lineHeight="12px" mt="5px" color="gray.500" textAlign="center">
        {volume}
      </Text>
      <Flex justifyContent="space-between" mt="15px" w="100%">
        <Text fontSize="12px" lineHeight="15px">
          В наличии
        </Text>
        <Text fontSize="12px" lineHeight="15px">
          {count}
        </Text>
      </Flex>
      <Button
        colorScheme={count <= 0 ? 'red' : 'whatsapp'}
        size="sm"
        borderRadius="10px"
        w="100%"
        h="30px"
        mt="10px"
        isDisabled={count <= 0}
        onClick={handleClick}
      >
        {count <= 0 ? 'Покупка невозможна' : `Купить за ${price}`}
      </Button>
    </Flex>
  );
};
