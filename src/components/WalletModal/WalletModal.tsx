import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import CoinImage from '../../assets/coin.png';
import { useAppSelector } from '../../hooks/redux';
import { selectWallet } from '../../store/wallet/wallet.selector';

export const WalletModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { wallet } = useAppSelector(selectWallet);

  return (
    <>
      <Button w="100%" colorScheme="linkedin" onClick={onOpen}>
        Мой кошелёк
      </Button>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose} size="2xl">
          <ModalOverlay />
          <ModalContent pb={4}>
            <ModalHeader>Мой кошелёк</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex gap={10}>
                <Image src={CoinImage} w="100px" h="100px" />
                <Stack spacing={2}>
                  <Text>
                    <b>Номинал 1:</b> {wallet[1]} монет
                  </Text>
                  <Text>
                    <b>Номинал 5:</b> {wallet[5]} монет
                  </Text>
                  <Text>
                    <b>Номинал 10:</b> {wallet[10]} монет
                  </Text>
                </Stack>
                <Stack spacing={2}>
                  <Text>
                    <b>Номинал 50:</b> {wallet[50]} монет
                  </Text>
                  <Text>
                    <b>Номинал 100:</b> {wallet[100]} монет
                  </Text>
                  <Text>
                    <b>Номинал 500:</b> {wallet[500]} монет
                  </Text>
                  <Text>
                    <b>Номинал 1000:</b> {wallet[1000]} монет
                  </Text>
                </Stack>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
