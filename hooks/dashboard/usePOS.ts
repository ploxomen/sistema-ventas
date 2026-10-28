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
                subtotal : (item.quantity + 1) * item.price
              }
            : item,
        ),
      );

      return;
    }

    setCart((current) => [
      ...current,
      {
        productId: product.id!,
        image: product.image,
        name: product.name,
        price: product.price,
        quantity: 1,
        subtotal : product.price,
        lots: [],
        hasExpiration: product.hasExpiration ?? false,
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
              subtotal : quantity * item.price
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
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const subtotal = total / (1 + taxRate);
    const tax = total - subtotal;

    return {
      subtotal,
      discount: 0,
      tax,
      total,
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
