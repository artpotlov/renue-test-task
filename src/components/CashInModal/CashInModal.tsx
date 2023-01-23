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
import { selectCashIn } from '../../store/cashin/cashin.selector';
import { cashInActions } from '../../store/cashin/cashin.slice';
import { vMachineActions } from '../../store/vmachine/vmachine.slice';
import { selectWallet } from '../../store/wallet/wallet.selector';
import { walletActions } from '../../store/wallet/wallet.slice';
import { CashInControl } from '../CashInControl';

export const CashInModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { total, cashInMoney } = useAppSelector(selectCashIn);
  const { wallet } = useAppSelector(selectWallet);
  const { clearAll } = cashInActions;
  const { setCashIn } = vMachineActions;
  const { sendToCashIn } = walletActions;
  const dispatch = useAppDispatch();

  const handleCloseBtnClick = () => {
    dispatch(clearAll());
    onClose();
  };

  const handleInvestBtnClick = () => {
    dispatch(setCashIn({ total, cashIn: cashInMoney }));
    dispatch(sendToCashIn(cashInMoney));
    dispatch(clearAll());

    onClose();
  };

  return (
    <>
      <Button w="100%" colorScheme="linkedin" onClick={onOpen}>
        Внести монеты
      </Button>

      {isOpen && (
        <Modal size="2xl" isOpen={isOpen} onClose={handleCloseBtnClick}>
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
              <Button
                colorScheme="whatsapp"
                onClick={handleInvestBtnClick}
                isDisabled={total === 0}
              >
                Внести
              </Button>
              <Button ml={4} onClick={handleCloseBtnClick}>
                Отмена
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
