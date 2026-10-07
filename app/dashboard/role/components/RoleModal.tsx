"use client";
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
  Switch,
} from "@heroui/react";
import { useForm } from "@/hooks/common/useForm";
import { useCallback, useEffect } from "react";
import { PropsModalHeroUI } from "@/types/global";

type RoleForm = Role & {modules : number[]};
export type CreateRolDto = Omit<RoleForm, "id">;

const dataForm: CreateRolDto = {
  name: "",
  description: "",
  icon: "user",
  modules: [],
};
export default function RoleModal({
  role = null,
  modules = [],
  isOpen,
  onFetchdata = () => {},
  onOpenChange,
}: PropsModalHeroUI & {
  onFetchdata: () => void;
  role: RoleForm | null;
  modules: Module[];
}) {
  const { form, setValue, onInputChange, onSubmit, onResetForm, loading } =
    useForm<RoleForm>({
      initialForm: role ? role : dataForm,
      url: "/roles",
    });
  const handleSelectedAllModule = () => {
    setValue(
      "modules",
      modules.map((m) => m.id).filter((id) => id !== undefined),
    );
  };
  const handleClearModule = () => {
    setValue("modules", []);
  };
  const handleSelectModule = (id: number, isSelected : boolean) => {
    const filterModules = !isSelected ? form.modules.filter(m => m !== id) : [...form.modules, id];
    setValue("modules", filterModules);
  };
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
                      {form?.id ? "Editar el" : "Establece un nuevo "} rol
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
                    className="mb-4"
                    value={form.description}
                    name="description"
                    onChange={onInputChange}
                  />
                  <InputCustom
                    label="Icono"
                    className="mb-2"
                    isRequired
                    value={form.icon}
                    name="icon"
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
                      <>
                        <ContentBox className="flex justify-between items-center mb-2">
                          <span className="block text-sm font-semibold text-slate-700">
                            Módulos y Permisos Asignados
                          </span>
                          <ContentBox className="space-x-2 text-xs">
                            <button
                              type="button"
                              onClick={() => handleSelectedAllModule()}
                              className="text-indigo-600 hover:underline"
                            >
                              Seleccionar Todos
                            </button>
                            <span className="text-slate-300">|</span>
                            <button
                              type="button"
                              onClick={() => handleClearModule()}
                              className="text-slate-500 hover:underline"
                            >
                              Limpiar
                            </button>
                          </ContentBox>
                        </ContentBox>
                        <ContentBox className="bg-slate-50 rounded-2xl p-4 border border-slate-200 max-h-56 overflow-y-auto space-y-2.5">
                          {modules.map((module) => (
                            <label
                              key={module.id}
                              className="flex items-start space-x-3 p-2 hover:bg-white rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-200"
                            >
                              <Switch
                                onChange={(e) => handleSelectModule(module.id!, e.target.checked)}
                                isSelected={
                                    form.modules.includes(module.id!)
                                }
                              />
                              <div>
                                <p
                                  className="text-sm font-semibold text-slate-800"
                                  x-text="mod.name"
                                >
                                  {module.name}
                                </p>
                                <p
                                  className="text-xs text-slate-500"
                                  x-text="mod.description"
                                >
                                  {module.description}
                                </p>
                              </div>
                            </label>
                          ))}
                        </ContentBox>
                      </>
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
  );
}
