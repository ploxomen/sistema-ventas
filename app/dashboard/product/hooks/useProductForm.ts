import { SubmitEvent, useCallback, useEffect, useMemo, useState } from "react";
import { ProductFormData, ProductImage, ProductLot } from "../types/product";
import { getBrands, getCategories } from "@/service/product.service";
import { Category } from "@/types/category";
import { apiAxios } from "@/lib/apiAxios";

const initialState: ProductFormData = {
  name: "",
  description: "",
  categoryId: null,
  subcategoryId: null,
  brandId: null,
  model: "",
  purchasePrice: 0,
  salePrice: 0,
  minimunStock: 0,
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
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Category[]>([]);

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
  const getCombos = useCallback(async () => {
    const response = await Promise.all([getCategories(), getBrands()]);
    setCategories(response[0].data);
    setBrands(response[1].data);
  }, []);

  const totalLotStock = useMemo(
    () =>
      form.lots.reduce((total, lot) => total + Number(lot.quantity || 0), 0),
    [form.lots],
  );
  const onSubmit = useCallback(
    (e: SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("model", form.model);
      // IDs: no enviar los campos nulos
      if (form.categoryId !== null) {
        formData.append("categoryId", String(form.categoryId));
      }
      if (form.subcategoryId !== null) {
        formData.append("subcategoryId", String(form.subcategoryId));
      }
      if (form.brandId !== null) {
        formData.append("brandId", String(form.brandId));
      }
      // Números
      formData.append("purchasePrice", String(form.purchasePrice));
      formData.append("salePrice", String(form.salePrice));
      formData.append("minimunStock", String(form.minimunStock));
      formData.append("wholesalePrice", String(form.wholesalePrice));
      formData.append("initialStock", String(form.initialStock));
      // Booleano
      formData.append("hasExpiration", String(form.hasExpiration));
      // Arreglo de objetos
      formData.append("lots", JSON.stringify(form.lots));
      // Archivos múltiples
      form.images.forEach((image) => {
        if (image.file) {
          formData.append("imageFile", image.file);
        }
      });
      formData.append(
        "images",
        JSON.stringify(
          form.images.map((img) =>
            img.id
              ? { isPrimary: img.isPrimary }
              : { isPrimary: img.isPrimary, id: img.id },
          ),
        ),
      );
      const response = apiAxios.post("product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    [form],
  );
  useEffect(() => {
    getCombos();
  }, [getCombos]);
  return {
    form,
    setForm,
    updateField,
    categories,
    brands,
    addImages,
    removeImage,
    setPrimaryImage,
    addLot,
    updateLot,
    removeLot,
    totalLotStock,
    onSubmit,
  };
}
