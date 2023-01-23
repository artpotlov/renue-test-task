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
import { selectPurchases } from '../../store/purchases/purchases.selector';
import { purchasesActions } from '../../store/purchases/purchases.slice';
import { PurchaseCard } from '../PurchaseCard';

export const PurchasesModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { products } = useAppSelector(selectPurchases);
  const { clearPurchases } = purchasesActions;
  const dispatch = useAppDispatch();

  const handleClearBtnClick = () => {
    dispatch(clearPurchases());
    onClose();
  };

  return (
    <>
      <Button w="100%" colorScheme="linkedin" onClick={onOpen}>
        Мои покупки
      </Button>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose} size={products.length > 0 ? '5xl' : '2xl'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Мои покупки</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex maxH="320px" flexWrap="wrap" gap="30px" overflow="auto">
                {products.length === 0 ? (
                  <Text fontSize="lg" color="gray.500">
                    Пока ничего не куплено
                  </Text>
                ) : (
                  products.map((product) => <PurchaseCard key={product.id} product={product} />)
                )}
              </Flex>
            </ModalBody>
            <ModalFooter>
              {products.length > 0 && (
                <Button colorScheme="red" onClick={handleClearBtnClick}>
                  Очистить
                </Button>
              )}
              <Button ml={4} onClick={onClose}>
                Закрыть
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
