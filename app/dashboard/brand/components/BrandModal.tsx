"use client";
import { LoaderOverlay } from "@/components/loader-overlay";
import { ContentBox } from "@/components/setting-option";
import InputCustom from "@/components/ui/input-custom";
import { useForm } from "@/hooks/common/useForm";
import { Brand } from "@/types/brand";
import { Category } from "@/types/category";
import { PropsModalHeroUI } from "@/types/global";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { BoxIcon } from "lucide-react";
import { useCallback, useEffect } from "react";
export type CreateBrandDto = Omit<Brand, "id">;
export type BrandForm = Partial<Category> & CreateBrandDto;
const dataForm: CreateBrandDto = {
  name: "",
};
export default function BrandModal({
  brand = null,
  isOpen,
  onFetchdata,
  onOpenChange,
}: PropsModalHeroUI & { onFetchdata: () => void; brand: Brand | null }) {
  const responseSuccess = useCallback(() => {
    onFetchdata();
    onOpenChange();
  }, [onFetchdata, onOpenChange]);
  const { form, onInputChange, onSubmit, onResetForm, loading } =
    useForm<BrandForm>({
      initialForm: brand ? brand : dataForm,
      url: "/brands",
      onSuccess: responseSuccess,
    });
  useEffect(() => {
    if (brand) {
      onResetForm(brand);
    } else {
      onResetForm(dataForm);
    }
  }, [brand]);
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <ContentBox className="flex gap-2 items-center">
                  <BoxIcon
                    className="bg-primary-100 text-primary-500 p-2 rounded-lg"
                    size={40}
                  />
                  <ContentBox className="flex-1">
                    <h2 className="text-slate-600">
                      {form?.id ? "Editar" : "Agregar"} marca
                    </h2>
                    <p className="text-sm font-medium text-slate-400">
                      {form?.id ? "Editar la" : "Establece una nueva "} marca
                    </p>
                  </ContentBox>
                </ContentBox>
              </ModalHeader>
              <ModalBody>
                <form onSubmit={onSubmit} id="form-brand">
                  <InputCustom
                    label="Marca"
                    className="mb-2"
                    value={form.name}
                    name="name"
                    onChange={onInputChange}
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => onClose()}
                >
                  Cerrar
                </Button>
                <Button color="primary" form="form-brand" type="submit">
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {loading && (
        <LoaderOverlay isVisible={true} message="Cargando petición" />
      )}
    </>
  );
}
