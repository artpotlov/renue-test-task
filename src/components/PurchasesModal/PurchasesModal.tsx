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
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectPurchases } from '../../store/slices/purchases/purchases.selector';
import { purchasesActions } from '../../store/slices/purchases/purchases.slice';
import { PurchaseCard } from '../PurchaseCard';

export const PurchasesModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { products } = useAppSelector(selectPurchases);
  const { clearPurchases } = purchasesActions;
  const dispatch = useAppDispatch();

  const handleClearBtn = () => {
    dispatch(clearPurchases());
    onClose();
  };

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
              {products.length === 0 ? (
                <Text>Пока ничего не куплено</Text>
              ) : (
                products.map((product) => <PurchaseCard key={product.id} product={product} />)
              )}
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleClearBtn}>
              Очистить
            </Button>
            <Button ml={4} onClick={onClose}>
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
