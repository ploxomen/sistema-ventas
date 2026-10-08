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
import { GroupedModule } from "@/store/useAuth";
import { Icon } from "./icon";
import Link from "next/link";

export function NavMain({
  items,
}: {
  items: GroupedModule[];
}) {
  return (
    <SidebarGroup>
      <div className="py-2">
        <a href="/dashboard">
        <img className="size-12 group-data-[collapsible=icon]:m-auto" src="/img/logo.avif" />
        </a>
      </div>
      <SidebarMenu>
        <Accordion type="single" collapsible className="group-data-[side=top]:flex group-data-[side=top]:gap-3 group-data-[side=top]:overflow-x-auto">
          {items.map((item) => (
            <AccordionItem
              key={item.idGroup}
              value={item.nameGroup || ""}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <AccordionTrigger className="p-0">
                  <SidebarMenuButton className="py-1 pr-2 h-11 pl-3 cursor-pointer" tooltip={item.modules}>
                    <Icon name={item.iconGroup || "user"} className="group-data-[collapsible=icon]:size-5! size-5! group-data-[collapsible=icon]:mb-1 group-data-[collapsible=icon]:m-auto group-data-[side=top]:size-10" />
                    <span>{item.nameGroup}</span>
                    <ChevronRight className="rtl:mr-auto ltr:ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 group-data-[side=left]:group-data-[state=collapsed]:rotate-0! group-data-[side=top]:rotate-90 group-data-[collapsible=icon]:absolute group-data-[collapsible=icon]:top-2 group-data-[side=right]:group-data-[state=collapsed]:rotate-180! group-data-[side=left]:right-0" />
                  </SidebarMenuButton>
                </AccordionTrigger>
                <AccordionContent>
                  <SidebarMenuSub>
                    {item.modules?.map((module) => (
                      <SidebarMenuSubItem key={module.idModule}>
                        <SidebarMenuSubButton asChild>
                          <a href={module.urlModule}>
                            <span>{module.nameModule}</span>
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
