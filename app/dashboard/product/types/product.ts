export interface Category {
  id: number;
  name: string;
}
export interface Subcategory {
  id: number;
  categoryId: number;
  name: string;
}
export interface Brand {
  id: number;
  name: string;
}
export interface ProductImage {
  id?: number;
  file?: File;
  url: string;
  isPrimary: boolean;
}
export interface ProductLot {
  id?: number;
  quantity: number;
  expirationDate?: string;
  lotNumber?: string;
}
export interface ProductFormData {
  id?: number;
  name: string;
  description: string;
  categoryId: number | null;
  subcategoryId: number | null;
  brandId: number | null;
  model: string;
  purchasePrice: number;
  salePrice: number;
  wholesalePrice: number;
  initialStock: number;
  hasExpiration: boolean;
  images: ProductImage[];
  lots: ProductLot[];
}

