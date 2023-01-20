import { Flex, Stack, Text } from '@chakra-ui/react';

export const Display = () => {
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
        <Text>0</Text>
      </Stack>
      <Stack spacing={0}>
        <Text fontWeight="bold">ОСТАТОК</Text>
        <Text>0</Text>
      </Stack>
    </Flex>
  );
};
