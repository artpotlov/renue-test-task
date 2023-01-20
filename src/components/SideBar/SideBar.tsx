import { Button, Flex, Image, Stack } from '@chakra-ui/react';
import VendingLogo from '../../assets/vending_machine.svg';
import { CashInModal } from '../CashInModal';
import { Display } from '../Display';
import { PurchasesModal } from '../PurchasesModal';
import { WalletModal } from '../WalletModal';

export const SideBar = () => {
  return (
    <Flex
      w="210px"
      h="600px"
      pt="35"
      pb="35"
      pl="15px"
      pr="15px"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      borderRadius="20px"
      boxShadow="0px 0px 30px rgba(64, 163, 255, 0.1)"
    >
      <Stack spacing="15px">
        <Display />
        <CashInModal />
        <Button w="100%" colorScheme="linkedin" isDisabled>
          ЗАБРАТЬ СДАЧУ
        </Button>
      </Stack>
      <Image src={VendingLogo} w="100px" h="48px" />
      <Stack w="100%" spacing="15px">
        <PurchasesModal />
        <WalletModal />
      </Stack>
    </Flex>
  );
};
