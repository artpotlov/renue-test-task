import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectCashOut } from '../../store/cashout/cashout.selector';
import { cashOutActions } from '../../store/cashout/cashout.slice';
import { selectVMachine } from '../../store/vmachine/vmachine.selector';
import { vMachineActions } from '../../store/vmachine/vmachine.slice';
import { walletActions } from '../../store/wallet/wallet.slice';
import { getChange } from '../../utils/getChange';
import { getChangeProduct } from '../../utils/getChangeProduct';
import { CashOutMoney } from '../CashOutMoney';
import { CashOutProducts } from '../CashOutProducts';

export const CashOutModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cashOutTotal, balance, products } = useAppSelector(selectVMachine);
  const { status, restMoney, restProducts } = useAppSelector(selectCashOut);
  const { subBalance, subProducts, clearCashInOut } = vMachineActions;
  const { addFromCashOut } = walletActions;
  const { setChangeMoney, setChangeProduct, clearAll } = cashOutActions;
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(clearAll());
    onClose();
  };

  const handleClick = () => {
    if (status === 'money') {
      dispatch(subBalance(restMoney));
      dispatch(addFromCashOut(restMoney));
    }

    if (status === 'products') {
      if (restProducts.length === 0) {
        dispatch(clearCashInOut());
        onClose();
        return;
      }

      dispatch(subProducts(restProducts));
    }

    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const changeMoney = getChange(cashOutTotal, balance);

    if (changeMoney.status === 'success') {
      dispatch(setChangeMoney({ cashOutMoney: changeMoney.resultCashOut }));
      return;
    }

    const changeProducts = getChangeProduct(cashOutTotal, products);

    dispatch(
      setChangeProduct({
        total: changeProducts.total,
        cashOutProducts: changeProducts.cashOutProducts,
      }),
    );
  }, [isOpen, products, cashOutTotal, setChangeMoney, setChangeProduct, dispatch, balance]);

  return (
    <>
      <Button w="100%" colorScheme="linkedin" isDisabled={cashOutTotal <= 0} onClick={onOpen}>
        Забрать сдачу
      </Button>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleClose} size={status === 'money' ? '2xl' : '5xl'}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Выдача сдачи</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {status === 'money' && <CashOutMoney />}
              {status === 'products' && <CashOutProducts />}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="whatsapp" onClick={handleClick}>
                {status === 'products' && restProducts.length === 0 ? 'ОК' : 'Забрать'}
              </Button>
              <Button ml={4} onClick={handleClose}>
                Отмена
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
