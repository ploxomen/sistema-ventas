"use client";

import { useMemo, useState } from "react";

import { CartItem, PaymentData, POSProduct, ProductLot } from "@/types/pos";

interface UsePOSOptions {
  taxRate?: number;
}

export function usePOS({ taxRate = 0.18 }: UsePOSOptions = {}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<POSProduct | null>(
    null,
  );

  const [lotModalOpen, setLotModalOpen] = useState(false);

  const addProduct = (product: POSProduct) => {
    const existing = cart.find((item) => item.productId === product.id);

    if (existing) {
      setCart((current) =>
        current.map((item) =>
          item.productId === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );

      return;
    }

    setCart((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        productId: product.id,
        name: product.name,
        sku: product.sku,
        price: product.price,
        quantity: 1,
        lots: [],
        hasExpiration: product.hasExpiration,
      },
    ]);
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeProduct(productId);
      return;
    }

    setCart((current) =>
      current.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity,
            }
          : item,
      ),
    );
  };

  const removeProduct = (productId: number) => {
    setCart((current) =>
      current.filter((item) => item.productId !== productId),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totals = useMemo(() => {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    const tax = subtotal * taxRate;

    return {
      subtotal,
      discount: 0,
      tax,
      total: subtotal,
    };
  }, [cart, taxRate]);

  const selectLot = (
    productId: number,
    lots: {
      lotId: number;
      lotNumber: string;
      quantity: number;
      expirationDate?: string | null;
    }[],
  ) => {
    setCart((current) =>
      current.map((item) =>
        item.productId === productId
          ? {
              ...item,
              lots,
            }
          : item,
      ),
    );

    setLotModalOpen(false);
    setSelectedProduct(null);
  };

  return {
    cart,
    totals,

    selectedProduct,
    setSelectedProduct,

    lotModalOpen,
    setLotModalOpen,

    addProduct,
    updateQuantity,
    removeProduct,
    clearCart,
    selectLot,
  };
}
