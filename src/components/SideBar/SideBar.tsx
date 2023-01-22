import { Flex, Image, Stack } from '@chakra-ui/react';
import VendingLogo from '../../assets/vending_machine.svg';
import { CashInModal } from '../CashInModal';
import { CashOutModal } from '../CashOutModal';
import { Display } from '../Display';
import { PurchasesModal } from '../PurchasesModal';
import { WalletModal } from '../WalletModal';

export const SideBar = () => {
  return (
    <Flex
      w="210px"
      h="600px"
      p="35px 15px"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      borderRadius="20px"
      boxShadow="0px 0px 30px rgba(64, 163, 255, 0.1)"
    >
      <Stack spacing={4}>
        <Display />
        <CashInModal />
        <CashOutModal />
      </Stack>
      <Image src={VendingLogo} w="100px" h="50px" />
      <Stack w="100%" spacing={4}>
        <PurchasesModal />
        <WalletModal />
      </Stack>
    </Flex>
  );
};
