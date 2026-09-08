import { ContentBox } from "@/components/setting-option";
import InputCustom from "@/components/ui/input-custom";
import TextareaCustom from "@/components/ui/textarea-custom";
import {
    Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { BoxIcon, PlusIcon, Trash } from "lucide-react";
interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}
export default function CategoryModal({ isOpen, onOpenChange }: Props) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
                <ContentBox className="flex gap-2 items-center">
                    <BoxIcon className="bg-primary-100 text-primary-500 p-2 rounded-lg" size={40}/>
                    <ContentBox className="flex-1">
                        <h2 className="text-slate-600">Agregar categoría</h2>
                        <p className="text-sm font-medium text-slate-400">Establece una nueva categoría con las subcategorías</p>
                    </ContentBox>
                </ContentBox>
            </ModalHeader>
            <ModalBody>
                <InputCustom label="Categoría" className="mb-2"/>
                <TextareaCustom label="Descripción" className="mb-2" />
                <ContentBox className="flex gap-2 items-center mb-2">
                    <h3 className="text-slate-500 flex-1 font-semibold">Subcategorías</h3>
                    <Button size="sm" variant="bordered" color="primary">
                        <PlusIcon size={16}/> Agregar subcategoría
                    </Button>
                </ContentBox>
                <ContentBox className="flex flex-col gap-3">
                    <ContentBox className="flex gap-2 items-center">
                        <InputCustom placeholder="Ej: Laptops"/>
                        <Button isIconOnly size="sm" color="danger" variant="light">
                            <Trash size={20}/>
                        </Button>
                    </ContentBox>
                </ContentBox>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" onPress={onClose}>
                Crear
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
