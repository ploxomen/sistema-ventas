import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
interface IconProps {
  icon: LucideIcon;
}
interface TextProps {
  text: string;
  className ?: string
}
type ContentProps = TextProps & IconProps;
export function IconsSettingOption({ icon: Icon }: IconProps) {
  return (
    <div className="flex items-center gap-2 mb-6 justify-between">
      <Icon className="size-6 text-primary" />
      <Switch size="sm"/>
    </div>
  );
}
export function TextSettingOption({ text }: TextProps) {
  return (
    <div className="text-left">
      <span>{text}</span>
    </div>
  );
}
export function ContentBox({className,...props} : React.ComponentProps<"div">){
    return (
        <div
        className={className}
        {...props}
        />
    )
}
export function ContentSettignOption({ icon: Icon, text, className }: ContentProps) {
  return (
    <Button variant="secondary" className={cn("p-0 rounded-2xl block h-auto w-full border-1", className)}>
      <Label className="block w-full cursor-pointer px-5 py-4">
        <IconsSettingOption icon={Icon} />
        <TextSettingOption text={text} />
      </Label>
    </Button>
  );
}
