"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return (
    <CollapsiblePrimitive.Root
      data-slot="collapsible"
      {...props}
      className="text-base font-semibold"
    />
  );
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      className="py-1 pr-2 pl-3 font-medium h-11 cursor-pointer"
      {...props}
    />
  );
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
