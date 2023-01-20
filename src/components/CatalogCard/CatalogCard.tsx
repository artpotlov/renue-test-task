import { Button, Flex, Image, Text, useToast } from '@chakra-ui/react';
import { useAppDispatch } from '../../hooks/redux';
import { vMachineActions } from '../../store/slices/VMachine/vmachine.slice';
import { TCatalogProduct } from '../../types/types';

type TProps = {
  product: TCatalogProduct;
};

export const CatalogCard = ({ product }: TProps) => {
  const { id, image, name, volume, count, price } = product;
  const toast = useToast();
  const { buy } = vMachineActions;
  const dispatch = useAppDispatch();

  const callToast = (title: string, description: string) => toast({ title, description });

  return (
    <Flex
      w="200px"
      flexDirection="column"
      alignItems="center"
      p="15px"
      bg="white"
      border="1px"
      borderColor="gray.300"
      borderRadius={20}
    >
      <Image
        w="100px"
        h="100px"
        src={image}
        alt={name}
        filter="drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.25));"
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
        colorScheme="whatsapp"
        size="sm"
        borderRadius="10px"
        w="100%"
        h="30px"
        mt="10px"
        onClick={() => dispatch(buy({ productID: id, toastFn: callToast }))}
      >
        Купить за {price}
      </Button>
    </Flex>
  );
};
