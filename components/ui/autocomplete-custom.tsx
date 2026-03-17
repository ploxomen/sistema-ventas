"use client";
import { cn } from "@/lib/utils";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteProps,
} from "@heroui/react";

type CustomAutocompleteProps = Omit<AutocompleteProps, "children"> & {
  items: { label: string; value: string }[];
};

export const MyAutocomplete = ({
  variant = "bordered", // Valor por defecto
  labelPlacement = "outside-top", // Valor por defecto
  items,
  className,
  ...props
}: CustomAutocompleteProps) => {
  return (
    <Autocomplete
      variant={variant}
      labelPlacement={labelPlacement}
      className={cn("max-w", className)}
      {...props}
    >
      {items.map((item) => (
        <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
      ))}
    </Autocomplete>
  );
};
