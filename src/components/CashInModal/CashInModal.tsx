import {
  Button,
  Flex,
  HStack,
  Image,
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
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectCashIn } from '../../store/selectors/cashin.selector';
import { selectWallet } from '../../store/selectors/wallet.selector';
import { cashInActions } from '../../store/slices/cashin/cashin.slice';
import { vMachineActions } from '../../store/slices/VMachine/vmachine.slice';
import { walletActions } from '../../store/slices/wallet/wallet.slice';
import { CashInControl } from '../CashInControl';

export const CashInModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { wallet } = useAppSelector(selectWallet);
  const { total, cashIn } = useAppSelector(selectCashIn);
  const { clearAll } = cashInActions;
  const { setCashIn } = vMachineActions;
  const { subCashIn } = walletActions;
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(clearAll());
    onClose();
  };

  const handleClick = () => {
    dispatch(setCashIn({ total, cashIn }));
    dispatch(subCashIn(cashIn));
    dispatch(clearAll());
  };

  return (
    <>
      <Button w="100%" colorScheme="linkedin" onClick={onOpen}>
        Внести монеты
      </Button>

      <Modal size="2xl" isOpen={isOpen} onClose={handleClose}>
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
                    <CashInControl name='Номинал 50' par='50' balance={wallet[50]} />
                    <CashInControl name='Номинал 100' par='100' balance={wallet[100]} />
                  </Stack>
                  <Stack spacing={8}>
                    <CashInControl name='Номинал 500' par='500' balance={wallet[500]} />
                    <CashInControl name='Номинал 1000' par='1000' balance={wallet[1000]} />
                  </Stack>
                </HStack>
                <Text mr={4} fontSize="lg" fontWeight="bold">
                  Итого будет внесено: {total}
                </Text>
              </Stack>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="whatsapp" onClick={handleClick}>
              Внести
            </Button>
            <Button ml={4} onClick={handleClose}>
              Отмена
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
