"use client";

import { useMemo, useState } from "react";

import {
  CartItem,
  CartItemLot,
  PaymentData,
  POSProduct,
  ProductLot,
} from "@/types/pos";
import { apiAxios } from "@/lib/apiAxios";

interface UsePOSOptions {
  taxRate?: number;
}

export function usePOS({ taxRate = 0.18 }: UsePOSOptions = {}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [lotModalOpen, setLotModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<POSProduct | null>(
    null,
  );
  const [lots, setLots] = useState<{
    productId: number | null;
    items: CartItemLot[];
  }>({ productId: null, items: [] });

  const closeModalLot = () => {
    setLotModalOpen(false);
    setSelectedProduct(null);
  };
  const viewLot = async (product: POSProduct) => {
    if (lots.productId !== product.id) {
      setSelectedProduct(product);
      const response = await apiAxios.get("product/" + product.id);
      setLots({
        productId: response.data.id,
        items: response.data?.productLote.map((lot: ProductLot) => ({
          lotId: lot.id,
          lotNumber: lot.lotNumber,
          quantity: lot.quantity,
          expirationDate: lot.expirationDate,
        })),
      });
    }
    setLotModalOpen(true);
  };
  const addProduct = (product: POSProduct) => {
    console.log(product)
    if (product.hasExpiration && product.id) {
      return viewLot(product);
    }
    const existing = cart.find((item) => item.productId === product.id);
    if (existing) {
      setCart((current) =>
        current.map((item) =>
          item.productId === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: (item.quantity + 1) * item.price,
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
        subtotal: product.price,
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
              subtotal: quantity * item.price,
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

  const addLot = ({
    lotId,
    lotNumber,
    expirationDate,
  }: CartItemLot) => {
    if (!selectedProduct) {
      return;
    }
    setCart((current) => [
      ...current,
      {
        lotId: lotId,
        lotNumber: lotNumber,
        expirationDate: expirationDate,
        productId: selectedProduct.id!,
        image: selectedProduct.image,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: 1,
        subtotal: selectedProduct.price,
      },
    ]);
    closeModalLot();
  };

  return {
    cart,
    lots: lots.items,
    closeModalLot,
    totals,
    selectedProduct,
    lotModalOpen,
    addProduct,
    updateQuantity,
    removeProduct,
    clearCart,
    addLot,
  };
}
