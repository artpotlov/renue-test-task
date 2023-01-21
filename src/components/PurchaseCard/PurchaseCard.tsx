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
          количество
        </Text>
        <Text fontSize="12px" lineHeight="15px">
          {count}
        </Text>
      </Flex>
    </Flex>
  );
};
