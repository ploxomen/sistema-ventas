"use client"
import { Role } from "@/types/role";
import InputCustom from "@/components/ui/input-custom";
import TextareaCustom from "@/components/ui/textarea-custom";
import { Module } from "@/types/module";
import { ContentBox } from "@/components/setting-option";
import { BoxIcon, PlusIcon, Trash } from "lucide-react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { useForm } from "@/hooks/common/useForm";
import { useCallback, useEffect } from "react";

export type CreateRolDto = Omit<Role, "id">;

const dataForm: CreateRolDto = {
  name: "",
  description: "",
  icon: "",
  modules: [],
};
export default function RoleModal({
    role = null,
    modules = [],
  isOpen,
  onFetchdata = () => {},
  onOpenChange,
} : PropsModalHeroUI & { onFetchdata: () => void; role: Role | null; modules : Module[] }) {
    const { form, setValue, onInputChange, onSubmit, onResetForm, loading } =
    useForm<Role>({
      initialForm: role ? role : dataForm,
      url: "/roles",
    });
    useEffect(() => {
    if (role) {
      onResetForm(role);
    } else {
      onResetForm(dataForm);
    }
  }, [role]);
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
                      {form?.id ? "Editar" : "Agregar"} rol
                    </h2>
                    <p className="text-sm font-medium text-slate-400">
                      {form?.id ? "Editar el" : "Establece un nuevo "}{" "}
                      rol
                    </p>
                  </ContentBox>
                </ContentBox>
              </ModalHeader>
              <ModalBody>
                <form onSubmit={onSubmit} id="form-categories">
                  <InputCustom
                    label="Nombre"
                    className="mb-2"
                    isRequired
                    value={form.name}
                    name="name"
                    onChange={onInputChange}
                  />
                  <TextareaCustom
                    label="Descripción"
                    className="mb-2"
                    value={form.description}
                    name="description"
                    onChange={onInputChange}
                  />
                  
                  <ContentBox className="flex flex-col gap-3">
                    {!modules.length && (
                      <div className="text-center font-semibold text-sm py-3">
                        <span className="text-slate-500">
                          No se encontraron modulos para ser seleccionados
                        </span>
                      </div>
                    )}
                    {modules.length > 0 && (

                        <ContentBox className="bg-slate-50 rounded-2xl p-4 border border-slate-200 max-h-56 overflow-y-auto space-y-2.5">
                            {
                                modules.map(module => (
                                    <label key={module.id} className="flex items-start space-x-3 p-2 hover:bg-white rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-200">
                                        <input className="checkbox" class="mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-4 h-4" value={module.id} />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-800" x-text="mod.name">{module.name}</p>
                                            <p className="text-xs text-slate-500" x-text="mod.description">{module.description}</p>
                                        </div>
                                    </label>
                                ))
                            }
                        </ContentBox>
                    )}
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
    </>
    )
}