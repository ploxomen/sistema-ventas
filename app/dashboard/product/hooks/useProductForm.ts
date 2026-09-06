import { useMemo, useState } from "react";
import { ProductFormData, ProductImage, ProductLot } from "../types/product";

const initialState: ProductFormData = {
  name: "",
  description: "",
  categoryId: null,
  subcategoryId: null,
  brandId: null,
  model: "",
  purchasePrice: 0,
  salePrice: 0,
  wholesalePrice: 0,
  initialStock: 0,
  lots: [],
  hasExpiration: false,
  images: [],
};
export function useProductForm(initialData?: Partial<ProductFormData>) {
  const [form, setForm] = useState<ProductFormData>({
    ...initialState,
    ...initialData,
  });
  const updateField = <K extends keyof ProductFormData>(
    field: K,
    value: ProductFormData[K],
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };
  const addImages = (files: FileList | null) => {
    if (!files) return;
    const newImages: ProductImage[] = Array.from(files).map((file) => ({
      file,
      url: URL.createObjectURL(file),
      isPrimary: false,
    }));
    setForm((current) => {
      const images = [...current.images, ...newImages];
      if (!images.some((image) => image.isPrimary) && images.length > 0) {
        images[0].isPrimary = true;
      }
      return {
        ...current,
        images,
      };
    });
  };
  const removeImage = (index: number) => {
    setForm((current) => ({
      ...current,
      images: current.images.filter((_, i) => i !== index),
    }));
  };
  const setPrimaryImage = (index: number) => {
    setForm((current) => ({
      ...current,
      images: current.images.map((img, i) => ({
        ...img,
        isPrimary: i === index,
      })),
    }));
  };
  const addLot = () => {
    const lot: ProductLot = {
      quantity: 0,
      expirationDate: "",
      lotNumber: "",
    };
    setForm((current) => ({
      ...current,
      lots: [...current.lots, lot],
    }));
  };
  const removeLot = (index: number) => {
    setForm((current) => ({
      ...current,
      lots: current.lots.filter((_, i) => index !== i),
    }));
  };
  const updateLot = <K extends keyof ProductLot>(
    index: number,
    field: K,
    value: ProductLot[K],
  ) => {
    setForm((current) => ({
      ...current,
      lots: current.lots.map((lot, i) =>
        i === index ? { ...lot, [field]: value } : lot,
      ),
    }));
  };
  const totalLotStock = useMemo(() => {
    form.lots.reduce((total, lot) => total + Number(lot.quantity || 0), 0);
  }, [form.lots]);
  return {
    form,
    setForm,
    updateField,
    addImages,
    removeImage,
    setPrimaryImage,
    addLot,
    updateLot,
    removeLot,
    totalLotStock,
  };
}
