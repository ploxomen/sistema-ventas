"use client";
import React, { useState } from "react";
import { ContentBox } from "../setting-option";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Item, ItemContent, ItemDescription } from "./item";
import { Checkbox } from "./checkbox";
import { Label } from "./label";
import { SelectFilterProps } from "@/types/ui/select";
import { cn } from "@/lib/utils";

export default function SelectOptions({
  label = "",
  initialOptions = [],
  className = "",
}: {
  label?: string;
  initialOptions?: SelectFilterProps[];
  className?: string;
}) {
  const [options, setOptions] = useState<SelectFilterProps[]>(initialOptions);
  const handleSelectOption = (optionName: string) => {
    const updatedOptions = options.map((option) => ({
      ...option,
      selected: option.name === optionName ? !option.selected : option.selected,
    }));
    setOptions(updatedOptions);
  };
  const selectedOptions = options.some((option) => option.selected === true);
  const textOptionsSelected =
    options
      .filter((option) => option.selected)
      .map((option) => option.name)
      .join(", ") || "";
  return (
    <Popover>
      <PopoverTrigger
        className="group relative"
        data-selected={selectedOptions}
      >
        <ContentBox
          role="button"
          className={cn(
            "pr-8 py-4 pl-3 border-1 w-40 h-14 rounded-md text-left group-data-[state=open]:border-2 cursor-pointer group-data-[state=open]:border-black hover:border-black",
            className,
          )}
        >
          <span className="block bg-white transition-all ease-in-out rounded-md absolute group-data-[state=open]:scale-[0.85] group-data-[state=open]:left-1 group-data-[state=open]:top-0 group-data-[state=open]:font-semibold   group-data-[selected=true]:font-semibold group-data-[selected=true]:scale-[0.85] dark:bg-transparent group-data-[selected=true]:left-1 group-data-[selected=true]:top-0 top-1/2 -translate-y-1/2 px-1.5 left-3 text-sm text-muted-foreground">
            {label}
          </span>
          {textOptionsSelected && (
            <span className="block text-sm text-muted-foreground truncate max-w-full">
              {textOptionsSelected}
            </span>
          )}
        </ContentBox>
      </PopoverTrigger>
      <PopoverContent className="w-52 p-1">
        {options.map((option, index) => (
          <Item
            className="p-0 mb-0.5 cursor-pointer hover:bg-accent"
            key={index}
          >
            <ItemContent>
              <ItemDescription className="text-sm font-normal flex gap-2 items-center">
                <Label
                  className={cn(
                    "px-2 h-9 border-0 rounded-md py-1.5 cursor-pointer w-full flex gap-2 items-center",
                    option.selected ? "bg-selected" : "",
                  )}
                >
                  <Checkbox
                    id={`cb-option-${option.name}`}
                    onClick={() => handleSelectOption(option.name)}
                    checked={option.selected}
                  />
                  {option.name}
                </Label>
              </ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </PopoverContent>
    </Popover>
  );
}
