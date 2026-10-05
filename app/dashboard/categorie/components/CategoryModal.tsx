"use client"
import { ContentBox } from "@/components/setting-option";
import InputCustom from "@/components/ui/input-custom";
import { useForm } from "@/hooks/common/useForm";
import { Category, SubCategory } from "@/types/category";
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
import { useCallback } from "react";
const dataForm: Category = {
  name: "",
  subCategories: [],
};
export default function CategoryModal({
  isOpen,
  setData,
  onOpenChange,
}: PropsModalHeroUI & { setData: (data: any) => void }) {
  const responseSuccess = (data : any) => {
    setData(prev => ([...prev, data]));
    onOpenChange();
  }
  const { form, setValue, onInputChange, onSubmit } = useForm<Category>({
    initialForm: dataForm,
    url: "/categories",
    onSuccess: responseSuccess
  });
  const handleAddSubcategory = useCallback(() => {
    const currentSubcategories = form.subCategories || [];
    setValue("subCategories", [
      ...currentSubcategories,
      { name: "" },
    ]);
  }, [form.subCategories]);
  const handleChangeNameSubCate = (key: number, value: string) => {
    const currentSubcategories = form.subCategories || [];
    setValue(
      "subCategories",
      currentSubcategories.map((prev, k) =>
        k === key ? { ...prev, name: value } : prev,
      ),
    );
  };
  return (
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
                  <h2 className="text-slate-600">Agregar categoría</h2>
                  <p className="text-sm font-medium text-slate-400">
                    Establece una nueva categoría con las subcategorías
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
                  {form?.subCategories?.map((sub, key) => (
                    <ContentBox key={key} className="flex gap-2 items-center">
                      <InputCustom
                        placeholder="Ej: Laptops"
                        value={sub.name}
                        onChange={(e) =>
                          handleChangeNameSubCate(
                            key,
                            e.target.value,
                          )
                        }
                      />
                      <Button
                        isIconOnly
                        size="sm"
                        color="danger"
                        variant="light"
                      >
                        <Trash size={20} />
                      </Button>
                    </ContentBox>
                  ))}
                </ContentBox>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" form="form-categories" type="submit">
                Crear
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
