"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  size?: "sm" | "md" | "lg" | "xl"
}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, size = "md", ...props }, ref) => {
    // Define size styles
    const sizeStyles = {
      sm: {
        root: "w-6 h-4",
        thumb: "size-[10px] data-[state=checked]:translate-x-2.5",
      },
      md: {
        root: "w-10 h-5",
        thumb: "h-4 w-4 data-[state=checked]:translate-x-5",
      },
      lg: {
        root: "w-12 h-6",
        thumb: "h-5 w-5 data-[state=checked]:translate-x-6",
      },
      xl: {
        root: "w-16 h-8",
        thumb: "h-7 w-7 data-[state=checked]:translate-x-8",
      },
    }

    const currentSize = sizeStyles[size]

    return (
      <SwitchPrimitives.Root
        className={cn(
          "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-500",
          currentSize.root,
          className,
        )}
        {...props}
        ref={ref}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform",
            currentSize.thumb,
          )}
        />
      </SwitchPrimitives.Root>
    )
  },
)
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }

