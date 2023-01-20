import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { CatalogCard } from '../CatalogCard';

export const PurchsesModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button w="100%" colorScheme="linkedin" onClick={onOpen}>
        Мои покупки
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Мои покупки</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex maxH="320px" flexWrap="wrap" gap="30px" overflow="auto">
              {new Array(7).fill(0).map((el) => (
                <CatalogCard />
              ))}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red">Очистить</Button>
            <Button ml={4} onClick={onClose}>
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
