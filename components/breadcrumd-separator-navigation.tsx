import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbList,
  BreadcrumbPage,
} from "./ui/breadcrumb";
import { DotIcon } from "lucide-react";
import Link from "next/link";
interface BreadcrumbSeparatorNavegationProps {
  url: string | null;
  title: string;
}
export default function BreadcrumbSeparatorNavegation({
  navigations,
}: {
  navigations: BreadcrumbSeparatorNavegationProps[];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
          {navigations.map((navigation, index) => (
            <>
            <BreadcrumbItem key={index}>
              {navigation.url ? (
                <BreadcrumbLink asChild>
                  <Link href={navigation.url}>{navigation.title}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{navigation.title}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < navigations.length - 1 && (
              <BreadcrumbSeparator>
                <DotIcon className="h-4 w-4" />
              </BreadcrumbSeparator>
            )}
            </>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
