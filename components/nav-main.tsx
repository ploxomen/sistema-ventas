"use client";
import { ChevronRight, type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <div className="py-2">
        <img className="size-12 group-data-[collapsible=icon]:m-auto" src="icon-app.svg" />
      </div>
      <SidebarMenu>
        <Accordion type="single" collapsible>
          {items.map((item) => (
            <AccordionItem
              key={item.title}
              value={item.title}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <AccordionTrigger className="p-0">
                  <SidebarMenuButton className="py-1 pr-2 h-11 pl-3 cursor-pointer" tooltip={item.title}>
                    {item.icon && <item.icon className="group-data-[collapsible=icon]:size-5! group-data-[collapsible=icon]:mb-1 group-data-[collapsible=icon]:m-auto !size-6" />}
                    <span>{item.title}</span>
                    <ChevronRight className="rtl:mr-auto ltr:ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 group-data-[collapsible=icon]:hidden" />
                  </SidebarMenuButton>
                </AccordionTrigger>
                <AccordionContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </AccordionContent>
              </SidebarMenuItem>
            </AccordionItem>
          ))}
        </Accordion>
      </SidebarMenu>
    </SidebarGroup>
  );
}
