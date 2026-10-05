"use client";
import { LoaderOverlay } from "@/components/loader-overlay";
import { ContentBox } from "@/components/setting-option";
import InputCustom from "@/components/ui/input-custom";
import { useForm } from "@/hooks/common/useForm";
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
import { BoxIcon, PlusIcon, Trash } from "lucide-react";
import { useCallback, useEffect } from "react";
export type CreateCategoryDto = Omit<Category, "id">;
export type CategoryFormData = Partial<Category> & CreateCategoryDto;
const dataForm: CreateCategoryDto = {
  name: "",
  subCategories: [],
};
export default function CategoryModal({
  categorie = null,
  isOpen,
  onFetchdata,
  onOpenChange,
}: PropsModalHeroUI & { onFetchdata: () => void; categorie: Category | null }) {
  const responseSuccess = useCallback(() => {
    onFetchdata();
    onOpenChange();
  }, [onFetchdata, onOpenChange]);
  const { form, setValue, onInputChange, onSubmit, onResetForm, loading } =
    useForm<CategoryFormData>({
      initialForm: categorie ? categorie : dataForm,
      url: "/categories",
      onSuccess: responseSuccess,
    });
  const handleAddSubcategory = useCallback(() => {
    const currentSubcategories = form.subCategories || [];
    setValue("subCategories", [...currentSubcategories, { name: "" }]);
  }, [form.subCategories]);
  const handleChangeNameSubCate = useCallback(
    (key: number, value: string) => {
      const currentSubcategories = form.subCategories || [];
      setValue(
        "subCategories",
        currentSubcategories.map((prev, k) =>
          k === key ? { ...prev, name: value } : prev,
        ),
      );
    },
    [form],
  );
  const handleRemoveSubCategory = (key: number) => {
    const newSubcategories = form.subCategories?.filter((_, i) => i !== key);
    setValue("subCategories", newSubcategories);
  };
  useEffect(() => {
    if (categorie) {
      onResetForm(categorie);
    } else {
      onResetForm(dataForm);
    }
  }, [categorie]);
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
                      {form?.id ? "Editar" : "Agregar"} categoría
                    </h2>
                    <p className="text-sm font-medium text-slate-400">
                      {form?.id ? "Editar la" : "Establece una nueva "}{" "}
                      categoría con las subcategorías
                    </p>
                  </ContentBox>
                </ContentBox>
              </ModalHeader>
              <ModalBody>
                <form onSubmit={onSubmit} id="form-categories">
                  <InputCustom
                    label="Categoría"
                    className="mb-2"
                    value={form.name}
                    name="name"
                    onChange={onInputChange}
                  />
                  <ContentBox className="flex gap-2 items-center mb-2">
                    <h3 className="text-slate-500 flex-1 font-semibold">
                      Subcategorías
                    </h3>
                    <Button
                      size="sm"
                      variant="bordered"
                      color="primary"
                      onPress={handleAddSubcategory}
                    >
                      <PlusIcon size={16} /> Agregar subcategoría
                    </Button>
                  </ContentBox>
                  <ContentBox className="flex flex-col gap-3">
                    {!form.subCategories?.length && (
                      <div className="text-center font-semibold text-sm">
                        <span className="text-slate-500">
                          No se asignaron subcategorías
                        </span>
                      </div>
                    )}
                    {form?.subCategories?.map((sub, key) => (
                      <ContentBox key={key} className="flex gap-2 items-center">
                        <InputCustom
                          placeholder="Ej: Laptops"
                          value={sub.name}
                          onChange={(e) =>
                            handleChangeNameSubCate(key, e.target.value)
                          }
                        />
                        <Button
                          isIconOnly
                          size="sm"
                          color="danger"
                          variant="light"
                          onPress={() => handleRemoveSubCategory(key)}
                        >
                          <Trash size={20} />
                        </Button>
                      </ContentBox>
                    ))}
                  </ContentBox>
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
                <Button color="primary" form="form-categories" type="submit">
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
