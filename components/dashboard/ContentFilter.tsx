import { cn } from "@/lib/utils";
import { ContentBox } from "../setting-option";

export default function ContentFilter({
  children,
  className,
}: {
  children ?: React.ReactNode;
  className?: string;
}) {
  return (
    <ContentBox className={cn("mt-10 shadow-md", className)}>
      {children}
    </ContentBox>
  );
}
