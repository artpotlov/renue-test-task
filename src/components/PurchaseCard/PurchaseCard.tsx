import { Flex, Image, Text } from '@chakra-ui/react';
import { TProduct } from '../../types/types';

type TProps = {
  product: TProduct;
};

export const PurchaseCard = ({ product }: TProps) => {
  const { image, name, volume, count } = product;

  return (
    <Flex
      w="200px"
      flexDirection="column"
      alignItems="center"
      p={4}
      bg="white"
      border="1px"
      borderColor="gray.300"
      borderRadius={20}
    >
      <Image
        w="90px"
        h="90px"
        src={image}
        alt={name}
        filter="drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.25))"
      />
      <Text fontSize="lg" lineHeight="1" fontWeight="bold" mt="10px" textAlign="center">
        {name}
      </Text>
      <Text fontSize="xs" lineHeight="1" mt="5px" color="gray.500" textAlign="center">
        {volume}
      </Text>
      <Flex justifyContent="space-between" mt="15px" w="100%">
        <Text fontSize="xs" lineHeight="1">
          Количество
        </Text>
        <Text fontSize="xs" lineHeight="1">
          {count}
        </Text>
      </Flex>
    </Flex>
  );
};
