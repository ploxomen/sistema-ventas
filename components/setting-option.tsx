import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { SwitchProps } from "@/types/inputs";
interface IconProps {
  icon: LucideIcon;
}
interface TextProps {
  text: string;
  className?: string;
}

type ContentProps = TextProps & IconProps & SwitchProps;
export function IconsSettingOption({
  icon: Icon,
  onCheckedChange,
  checked,
}: IconProps & SwitchProps) {
  return (
    <div className="flex items-center gap-2 mb-6 justify-between">
      <Icon className="size-6 text-primary" />
      <Switch size="sm" onCheckedChange={onCheckedChange} checked={checked} />
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
export function ContentBox({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={className} {...props} />;
}
export function ContentSettignOption({
  icon: Icon,
  text,
  className,
  onCheckedChange = () => {},
  checked = false,
}: ContentProps) {
  return (
    <Button
      variant="secondary"
      asChild
      className={cn(`p-0 rounded-2xl block h-auto w-full border-1 ${checked ? 'bg-[#919eab14] hover:bg-[#919eab14]' : 'bg-transparent hover:bg-inherit'}`, className)}
    >
      <Label className="block w-full cursor-pointer px-5 py-4">
        <IconsSettingOption
          icon={Icon}
          onCheckedChange={onCheckedChange}
          checked={checked}
        />
        <TextSettingOption text={text} />
      </Label>
    </Button>
  );
}
