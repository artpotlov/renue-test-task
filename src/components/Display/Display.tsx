import { Box, Flex, Text } from '@chakra-ui/react';
import { useAppSelector } from '../../hooks/redux';
import { selectVMachine } from '../../store/slices/vmachine/vmachine.selector';

export const Display = () => {
  const { cashInTotal, cashOutTotal } = useAppSelector(selectVMachine);

  return (
    <Flex
      w="180px"
      h="150px"
      p={4}
      flexDirection="column"
      justifyContent="space-between"
      bg="gray.50"
      border="1px"
      borderColor="gray.200"
      borderRadius={10}
    >
      <Box>
        <Text fontWeight="bold">ВНЕСЕНО</Text>
        <Text>{cashInTotal}</Text>
      </Box>
      <Box>
        <Text fontWeight="bold">ОСТАТОК</Text>
        <Text>{cashOutTotal}</Text>
      </Box>
    </Flex>
  );
};
