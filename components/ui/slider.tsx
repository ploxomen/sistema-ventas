"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

function Slider({
  className,
  defaultValue,
  complementValue,
  value,
  min = 0,
  max = 100,
  step = 1,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root> & {
  complementValue?: string;
}) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  );
  const separator = Math.floor((max - min) / step);

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-3 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
        )}
      >
        {Array.from({ length: separator }, (_, index) => (
          <span
            className="absolute z-10 bg-red-500 block w-0.5 h-2 top-0"
            style={{
              left: `${(100 / separator) * index}%`,
            }}
          ></span>
        ))}
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <Tooltip open>
          <TooltipTrigger asChild>
            <SliderPrimitive.Thumb
              data-slot="slider-thumb"
              key={index}
              className="[&>span]:z-50 border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-8 focus-visible:ring-8 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
            />
          </TooltipTrigger>
          <TooltipContent>{`${value}${complementValue}`}</TooltipContent>
        </Tooltip>
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
