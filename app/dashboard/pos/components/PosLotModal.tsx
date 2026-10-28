import { ContentBox } from "@/components/setting-option";
import { CartItemLot, POSProduct } from "@/types/pos";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { InfoIcon } from "lucide-react";
import React, { useCallback } from "react";
interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  product: POSProduct | null;
  lots: CartItemLot[];
  addLot : ({lotId, lotNumber, expirationDate} : CartItemLot) => void
}
export default function PosLotModal({
  isOpen = false,
  onOpenChange = () => {},
  product,
  lots = [],
  addLot = () => {}
}: Props) {
  if (!product) {
    return;
  }
  const verifDate = useCallback((expirationDate: string) => {
    const fecha1 = new Date(expirationDate);
    const fecha2 = new Date();
    return fecha1.getTime() >= fecha2.getTime();
  }, []);
  return (
    <Modal isOpen={isOpen} size="3xl" onClose={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <ContentBox>
                <p className="text-xs text-slate-400">CONTROL DE LOTES</p>
                <h2 className="font-bold text-lg">Seleccionar lote</h2>
                <p className="text-sm text-slate-400">{product.name}</p>
              </ContentBox>
            </ModalHeader>
            <ModalBody>
              <ContentBox className="px-5 py-3 bg-blue-50 border-b border-blue-100">
                <ContentBox className="flex gap-2">
                  <InfoIcon size={24} />
                  <p className="text-xs text-blue-700">
                    Los lotes están ordenados por fecha de vencimiento. Se
                    recomienda vender primero el lote con vencimiento más
                    próximo.
                  </p>
                </ContentBox>
              </ContentBox>
              <ContentBox className="space-y-3 max-h-[420px] overflow-y-auto">
                {lots.map((lot, key) => (
                  <Button
                    color={key === 0 ? 'primary' : 'secondary'}
                    className="p-4 block h-auto"
                    variant={key === 0 ? 'bordered' : 'solid'}
                    fullWidth
                    onPress={() => addLot({
                      lotId: lot.lotId,
                      lotNumber: lot.lotNumber,
                      expirationDate: lot.expirationDate
                    })}
                  >
                    <ContentBox className="flex w-full items-center justify-between">
                      <ContentBox className="text-left">
                        <p className="font-bold">Lote - {lot.lotNumber}</p>
                        <p className="text-xs text-slate-400 mt-2">
                          Stock:
                          {lot.quantity}
                        </p>
                      </ContentBox>
                      <ContentBox className="text-right">
                        <p className="text-sm font-semibold">
                          {lot.expirationDate?.split("T")[0]}
                        </p>
                        <span className={`inline-block mt-1 px-2 py-1 rounded-full text-[10px] font-semibold ${lot.expirationDate && verifDate(lot.expirationDate) ? 'bg-emerald-50 text-emerald-500' : 'bg-red-50 text-red-500'}`}>
                          { lot.expirationDate && verifDate(lot.expirationDate) ? 'Vigente' : 'Vencido' }
                        </span>
                      </ContentBox>
                    </ContentBox>
                  </Button>
                ))}
              </ContentBox>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
