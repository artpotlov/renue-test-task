import { Flex } from '@chakra-ui/react';
import { useAppSelector } from '../../hooks/redux';
import { selectVMachine } from '../../store/vmachine/vmachine.selector';
import { CatalogCard } from '../CatalogCard';

export const Catalog = () => {
  const { products } = useAppSelector(selectVMachine);

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
      {products.map((product) => (
        <CatalogCard key={product.id} product={product} />
      ))}
    </Flex>
  );
};
