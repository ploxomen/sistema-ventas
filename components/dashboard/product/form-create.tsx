import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SubTitleCard from "../SubTitleCard";
import { Apple } from "lucide-react";
import InputCustom from "@/components/ui/input-custom";
import { ContentBox } from "@/components/setting-option";
import { AutocompleteItem } from "@heroui/autocomplete";
import { MyAutocomplete } from "@/components/ui/autocomplete-custom";
import TextareaCustom from "@/components/ui/textarea-custom";
export default function FormProduct() {
  return (
    <form>
      <Card className="gap-1">
        <CardHeader>
          <SubTitleCard
            title="Datos generales"
            icon={Apple}
            description="Establece el nombre, categoria, modelo, descripción e imágenes"
          />
        </CardHeader>
        <CardContent>
          <ContentBox className="grid grid-cols-12 gap-2">
            <InputCustom
              label="Producto"
              isRequired
              className="col-span-full"
            />
            <MyAutocomplete
              label="Categoría"
              className="col-span-3"
              isRequired
              items={[{ value: "a", label: "as" }]}
            />
            <MyAutocomplete
              label="Subcategoría"
              className="col-span-3"
              isRequired
              items={[{ value: "a", label: "as" }]}
            />
            <MyAutocomplete
              label="Marca"
              className="col-span-3"
              isRequired
              items={[{ value: "a", label: "as" }]}
            />
            <InputCustom label="Modelo" className="col-span-3" />
            <TextareaCustom label="Detalle" className="col-span-full" />
          </ContentBox>
        </CardContent>
      </Card>
      <Card className="gap-1">
        <CardHeader>
          <SubTitleCard
            title="Configuración"
            icon={Apple}
            description="Establece el nombre, categoria, modelo, descripción e imágenes"
          />
        </CardHeader>
        <CardContent>
          <ContentBox className="grid grid-cols-12 gap-2">
            <InputCustom
              label="Producto"
              isRequired
              className="col-span-full"
            />
            <MyAutocomplete
              label="Categoría"
              className="col-span-3"
              isRequired
              items={[{ value: "a", label: "as" }]}
            />
            <MyAutocomplete
              label="Subcategoría"
              className="col-span-3"
              isRequired
              items={[{ value: "a", label: "as" }]}
            />
            <MyAutocomplete
              label="Marca"
              className="col-span-3"
              isRequired
              items={[{ value: "a", label: "as" }]}
            />
            <InputCustom label="Modelo" className="col-span-3" />
            <TextareaCustom label="Detalle" className="col-span-full" />
          </ContentBox>
        </CardContent>
      </Card>
    </form>
  );
}
