import SubTitleCard from "@/components/dashboard/SubTitleCard";
import { ContentBox } from "@/components/setting-option";
import { CardContent } from "@/components/ui/card";
import { Button, Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { ImageIcon, Star, Upload, X } from "lucide-react";
import React from "react";
import { ProductImage } from "../types/product";
interface Props {
  images: ProductImage[];

  onAdd: (files: FileList | null) => void;
  onRemove: (index: number) => void;
  onPrimary: (index: number) => void;
}

export default function ProductImages({
  images,
  onAdd,
  onRemove,
  onPrimary,
}: Props) {
  return (
    <Card className="gap-1 pb-5 flex-1">
      <CardHeader>
        <SubTitleCard
          title="Imágenes"
          icon={ImageIcon}
          description="Establece las imágenes del producto"
        />
      </CardHeader>
      <CardContent>
        <ContentBox className="flex flex-col gap-5">
          <label
            htmlFor="product-images"
            className="
          flex
          min-h-36
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-xl
          border-2
          border-dashed
          border-default-200
          bg-default-50
          p-6
          transition
          hover:border-primary
          hover:bg-primary-50
        "
          >
            <Upload className="mb-3 h-8 w-8 text-default-400" />

            <span className="font-medium">Agregar fotografías</span>

            <span className="mt-1 text-sm text-default-400">
              Puedes seleccionar una o varias imágenes
            </span>

            <input
              id="product-images"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(event) => {
                onAdd(event.target.files);
                event.target.value = "";
              }}
            />
          </label>

          {images.length > 0 && (
            <div className="flex-1 grid grid-cols-2 gap-4 md:grid-cols-4">
              {images.map((image, index) => (
                <Card key={`${image.url}-${index}`} className="overflow-hidden">
                  <CardBody className="relative p-0">
                    <img
                      src={image.url}
                      alt={`Producto ${index + 1}`}
                      className="
                    aspect-square
                    w-full
                    object-cover
                  "
                    />

                    {image.isPrimary && (
                      <Chip
                        size="sm"
                        color="primary"
                        variant="solid"
                        className="absolute left-2 top-2"
                      >
                        Principal
                      </Chip>
                    )}

                    <div
                      className="
                    absolute
                    bottom-2
                    left-2
                    right-2
                    flex
                    justify-between
                  "
                    >
                      <Button
                        size="sm"
                        variant="flat"
                        onPress={() => onPrimary(index)}
                      >
                        <Star
                          className={image.isPrimary ? "fill-current" : ""}
                        />
                      </Button>

                      <Button
                        size="sm"
                        color="danger"
                        onPress={() => onRemove(index)}
                      >
                        <X />
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        </ContentBox>
      </CardContent>
    </Card>
  );
}
