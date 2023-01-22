import { Box, Flex } from '@chakra-ui/react';
import { Catalog } from '../Catalog';
import { SideBar } from '../SideBar';

export const App = () => {
  return (
    <Box w="100vw" h="100vh" display="flex" justifyContent="center" alignItems="center" bg="bg.500">
      <Flex gap="40px">
        <Catalog />
        <SideBar />
      </Flex>
    </Box>
  );
};
