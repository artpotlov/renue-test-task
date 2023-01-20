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

export const WalletModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button w="100%" colorScheme="linkedin" onClick={onOpen}>
        Мой кошелёк
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent p="15px">
          <ModalHeader>Мой кошелёк</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap="35px">
              <Image src={CoinImage} w="100px" h="100px" />
              <Stack spacing={2}>
                <Text>
                  <b>Номинал 1:</b> 100 монет
                </Text>
                <Text>
                  <b>Номинал 5:</b> 100 монет
                </Text>
                <Text>
                  <b>Номинал 10:</b> 100 монет
                </Text>
              </Stack>
              <Stack spacing={2}>
                <Text>
                  <b>Номинал 50:</b> 100 монет
                </Text>
                <Text>
                  <b>Номинал 100:</b> 100 монет
                </Text>
                <Text>
                  <b>Номинал 500:</b> 100 монет
                </Text>
                <Text>
                  <b>Номинал 1000:</b> 100 монет
                </Text>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
