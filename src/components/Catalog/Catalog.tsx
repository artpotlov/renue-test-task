import { Flex } from '@chakra-ui/react';
import { CatalogCard } from '../CatalogCard';

export const Catalog = () => {
  return (
    <Flex
      w="960px"
      h="600px"
      gap="30px"
      flexWrap="wrap"
      bg="white"
      borderRadius="20px"
      p="35px"
      boxShadow="0px 0px 30px rgba(64, 163, 255, 0.1)"
    >
      {new Array(8).fill(0).map((el, i) => (
        <CatalogCard />
      ))}
    </Flex>
  );
};
