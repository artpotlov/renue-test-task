import { Flex, Stack, Text } from '@chakra-ui/react';
import { useAppSelector } from '../../hooks/redux';
import { selectVMachine } from '../../store/selectors/vmachine.selector';

export const Display = () => {
  const { cashInTotal, cashOutTotal } = useAppSelector(selectVMachine);

  return (
    <Flex
      w="180px"
      h="150px"
      pt="20px"
      pb="20px"
      pl="15px"
      pr="15px"
      flexDirection="column"
      justifyContent="space-between"
      bg="gray.50"
      border="1px"
      borderColor="gray.200"
      borderRadius="15px"
    >
      <Stack spacing={0}>
        <Text fontWeight="bold">ВНЕСЕНО</Text>
        <Text>{cashInTotal}</Text>
      </Stack>
      <Stack spacing={0}>
        <Text fontWeight="bold">ОСТАТОК</Text>
        <Text>{cashOutTotal}</Text>
      </Stack>
    </Flex>
  );
};
