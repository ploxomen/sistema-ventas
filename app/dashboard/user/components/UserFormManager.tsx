"use client";
import SubTitleCard from "@/components/dashboard/SubTitleCard";
import { ContentBox } from "@/components/setting-option";
import { MyAutocomplete } from "@/components/ui/autocomplete-custom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import InputCustom from "@/components/ui/input-custom";
import { useForm } from "@/hooks/common/useForm";
import { useRoleData } from "@/hooks/common/useRoleData";
import { UserForm } from "@/types/user";
import { LockIcon, SaveIcon, UserIcon } from "lucide-react";
import ListRoles from "./ListRoles";
import { Button } from "@/components/ui/button";

const defaultDataForm: UserForm = {
  documentType: "",
  documentNumber: "",
  email: "",
  firstName: "",
  lastName: "",
  address: "",
  dateOfBirth: "",
  phone: "",
  roleIds: [],
};

export default function UserFormManager({
  user = null,
}: {
  user: UserForm | null;
}) {
  const { roles } = useRoleData();
  const { form, onSubmit, onInputChange, setValue, onResetForm } =
    useForm<UserForm>({
      initialForm: user ? user : defaultDataForm,
      url: "users",
      onSuccess: () => {
        if (!user) {
          onResetForm(defaultDataForm);
        }
      },
    });
  const handleSelect = (isChecked: boolean, idRol: number) => {
    const rolesSelected = isChecked
      ? [...form.roleIds, idRol]
      : form.roleIds.filter((prev) => prev !== idRol);
    setValue("roleIds", rolesSelected);
  };
  return (
    <form onSubmit={onSubmit}>
      <Card className="gap-1 mb-5">
        <CardHeader>
          <SubTitleCard
            title="Datos personales"
            icon={UserIcon}
            description="Información básica del usuario"
          />
        </CardHeader>
        <CardContent>
          <ContentBox className="grid grid-cols-12 gap-2">
            <MyAutocomplete
              label="Tipo de documento"
              className="col-span-6"
              name="documentType"
              isRequired
              selectedKey={form.documentType}
              onChange={onInputChange}
              items={[
                { value: "DNI", label: "D.N.I" },
                { value: "PASAPORTE", label: "Pasaporte" },
                { value: "CARNET_EXTRANJERIA", label: "Carnet de extranjería" },
              ]}
            />
            <InputCustom
              label="Número de documento"
              name="documentNumber"
              isRequired
              value={form.documentNumber}
              onChange={onInputChange}
              className="col-span-6"
            />
            <InputCustom
              label="Apellidos"
              name="lastName"
              isRequired
              value={form.lastName}
              onChange={onInputChange}
              className="col-span-6"
            />
            <InputCustom
              label="Nombres"
              name="firstName"
              isRequired
              value={form.firstName}
              onChange={onInputChange}
              className="col-span-6"
            />
            <InputCustom
              label="Dirección"
              name="address"
              value={form.address}
              onChange={onInputChange}
              className="col-span-full"
            />
            <InputCustom
              label="Fecha nacimiento"
              type="date"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={onInputChange}
              className="col-span-6"
            />
            <InputCustom
              label="Celular"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={onInputChange}
              className="col-span-6"
            />
            <InputCustom
              label="Correo"
              name="email"
              type="email"
              value={form.email}
              onChange={onInputChange}
              isRequired
              className="col-span-full"
            />
          </ContentBox>
        </CardContent>
      </Card>
      <Card className="gap-1 mb-5">
        <CardHeader>
          <SubTitleCard
            title="Roles y permisos"
            icon={LockIcon}
            description="Puedes asignar uno o varios roles al usuario"
          />
        </CardHeader>
        <CardContent>
          <ContentBox className="grid grid-cols-12 gap-2">
            <ListRoles
              roles={roles}
              onChecked={handleSelect}
              rolesSelected={form.roleIds}
            />
          </ContentBox>
        </CardContent>
      </Card>
      <div className="py-4 text-right">
        <Button color="primary" type="submit">
          <SaveIcon size={24} />
          <span>Guardar</span>
        </Button>
      </div>
    </form>
  );
}
