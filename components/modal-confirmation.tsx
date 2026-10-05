"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

interface ConfirmOptions {
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  color?: "danger" | "primary" | "warning" | "secondary" | "success";
}

type ConfirmFunction = (options?: ConfirmOptions) => Promise<boolean>;

const ConfirmContext = createContext<ConfirmFunction | null > (null);

export const ConfirmProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ConfirmOptions>({});
  const [resolver, setResolver] = useState<((value: boolean) => void) | null>(null);

  const confirm = useCallback((opts?: ConfirmOptions): Promise<boolean> => {
    setOptions(opts || {});
    setIsOpen(true);

    return new Promise((resolve) => {
      setResolver(() => resolve);
    });
  }, []);

  const handleClose = (result: boolean) => {
    setIsOpen(false);
    if (resolver) {
      resolver(result);
      setResolver(null);
    }
  };

  return (
    <ConfirmContext.Provider value={confirm}>
        {children}
      <Modal isOpen={isOpen} onClose={() => handleClose(false)} placement="center">
        <ModalContent>
          <ModalHeader>{options.title || "Confirmar acción"}</ModalHeader>
          <ModalBody>
            <p className="text-sm text-default-600">
              {options.description || "¿Estás seguro de que deseas continuar?"}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onPress={() => handleClose(false)} variant="light">
              {options.cancelText || "Cancelar"}
            </Button>
            <Button color={options.color || "danger"} onPress={() => handleClose(true)}
            >
              {options.confirmText || "Confirmar"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ConfirmContext.Provider>
  );
};

export const useConfirm = () => {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error("useConfirm debe ser usado dentro de un ConfirmProvider");
  }
  return context;
};