import { Button, Flex, Image, Text } from '@chakra-ui/react';

type TProps = {
  img: string;
  name: string;
  volume: string;
  inStock: number;
  price: number;
};

export const CatalogCard = () => {
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
        src="/assets/catalog/pepsi.png"
        w="100px"
        h="100px"
        filter="drop-shadow(0px 3px 15px rgba(0, 0, 0, 0.25));"
      />
      <Text fontSize="20px" lineHeight="23px" fontWeight="bold" mt="10px" textAlign="center">
        Pepsi
      </Text>
      <Text fontSize="10px" lineHeight="12px" mt="5px" color="gray.500" textAlign="center">
        330 мл
      </Text>
      <Flex justifyContent="space-between" mt="15px" w="100%">
        <Text fontSize="12px" lineHeight="15px">
          В наличии
        </Text>
        <Text fontSize="12px" lineHeight="15px">
          20
        </Text>
      </Flex>
      <Button colorScheme="whatsapp" size="sm" borderRadius="10px" w="100%" h="30px" mt="10px">
        КУПИТЬ ЗА 500
      </Button>
    </Flex>
  );
};
