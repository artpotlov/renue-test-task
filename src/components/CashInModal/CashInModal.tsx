import {
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import CoinImage from '../../assets/coin.png';

export const CashInModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button w="100%" colorScheme="linkedin" onClick={onOpen}>
        Внести монеты
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Внесение монет в аппарат</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap={8}>
              <Image src={CoinImage} w="100px" h="100px" />
              <Stack spacing={4}>
                <HStack spacing={8}>
                  <Stack spacing={8}>
                    <Stack spacing={2}>
                      <Text fontWeight="bold">Номинал 50</Text>
                      <HStack spacing={2}>
                        <Button>-</Button>
                        <Input type="number" w="80px" placeholder="0" textAlign="center" />
                        <Button>+</Button>
                      </HStack>
                      <Text fontSize="sm">Доступно: 0</Text>
                    </Stack>
                    <Stack spacing={2}>
                      <Text fontWeight="bold">Номинал 100</Text>
                      <HStack spacing={2}>
                        <Button>-</Button>
                        <Input type="number" w="80px" placeholder="0" textAlign="center" />
                        <Button>+</Button>
                      </HStack>
                      <Text fontSize="sm">Доступно: 0</Text>
                    </Stack>
                  </Stack>
                  <Stack spacing={8}>
                    <Stack spacing={2}>
                      <Text fontWeight="bold">Номинал 500</Text>
                      <HStack spacing={2}>
                        <Button>-</Button>
                        <Input type="number" w="80px" placeholder="0" textAlign="center" />
                        <Button>+</Button>
                      </HStack>
                      <Text fontSize="sm">Доступно: 0</Text>
                    </Stack>
                    <Stack spacing={2}>
                      <Text fontWeight="bold">Номинал 1000</Text>
                      <HStack spacing={2}>
                        <Button>-</Button>
                        <Input type="number" w="80px" placeholder="0" textAlign="center" />
                        <Button>+</Button>
                      </HStack>
                      <Text fontSize="sm">Доступно: 0</Text>
                    </Stack>
                  </Stack>
                </HStack>
                <Text mr={4} fontSize="lg" fontWeight="bold">
                  Итого будет внесено: 1000
                </Text>
              </Stack>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="whatsapp">Внести</Button>
            <Button ml={4} onClick={onClose}>
              Отмена
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
