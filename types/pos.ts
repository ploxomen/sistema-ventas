export type PaymentMethod =
  | "cash"
  | "yape"
  | "plin"
  | "digital_wallet";

export interface POSProduct {
  id?: number;
  name: string;
  sku?: string;
  barcode?: string;
  price: number;
  image?: string;
  stock: number;
  brand ?: string,
  subcategory ?: string,
  hasExpiration: boolean;
}

export interface ProductLot {
  id: number;
  productId: number;
  lotNumber: string;
  expirationDate?: string | null;
  currentQuantity: number;
}

export interface CartItemLot {
  lotId: number;
  lotNumber: string;
  quantity: number;
  expirationDate?: string | null;
}

export interface CartItem {
  id: string;
  productId: number;
  name: string;
  sku: string;
  price: number;
  quantity: number;

  /**
   * Lotes que terminarán afectando el inventario.
   */
  lots: CartItemLot[];

  hasExpiration: boolean;
}

export interface CartTotals {
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
}

export interface PaymentData {
  method: PaymentMethod;
  amount: number;

  /**
   * Utilizado principalmente para efectivo.
   */
  receivedAmount?: number;

  changeAmount?: number;

  /**
   * Número de operación para Yape,
   * Plin u otra billetera.
   */
  reference?: string;
}

export interface CreateSalePayload {
  customerId?: number | null;

  items: {
    productId: number;
    quantity: number;
    unitPrice: number;

    lots: {
      lotId: number;
      quantity: number;
    }[];
  }[];

  payments: PaymentData[];

  subtotal: number;
  discount: number;
  tax: number;
  total: number;
}