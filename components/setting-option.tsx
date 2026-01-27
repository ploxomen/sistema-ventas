import { InfoIcon, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { SwitchProps } from "@/types/inputs";
import { Badge } from "@/components/ui/badge";
import { Slider } from "./ui/slider";
import { useState } from "react";
interface IconProps {
  icon: LucideIcon;
}
interface TextProps {
  text: string;
  className?: string;
}
interface IconButtonSvg {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text?: string;
  className?: string;
  iconProps?: React.SVGProps<SVGSVGElement>;
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
export function BadgeAsNav({ text, className }: TextProps) {
  return (
    <Badge className={cn("text-[10px] font-bold absolute -top-2.5", className)}>
      {text}
      <InfoIcon className="size-4" />
    </Badge>
  );
}
export function ButtonBase({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      className={cn(
        "cursor-pointer text-[10px] text-left font-semibold text-primary",
        className,
      )}
    >
      {children}
    </button>
  );
}
export function SliderFont({ valueInitial }: { valueInitial: number }) {
  const [value, setValue] = useState([valueInitial]);
  return (
    <Slider
      min={12}
      max={20}
      complementValue="px"
      step={1}
      value={value}
      className="mx-auto w-full max-w-xs"
      onValueChange={setValue}
    />
  );
}
export function ButtonSvg({
  Icon,
  className = "",
  text = "",
  iconProps,
}: IconButtonSvg) {
  return (
    <ButtonBase
      className={cn("text-slate-500 flex gap-3 items-center", className)}
    >
      <Icon aria-hidden="true" {...iconProps} />
      {text && <span>{text}</span>}
    </ButtonBase>
  );
}
export function ContentSettignBox({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <ContentBox
      className="rounded-2xl relative border-1 pt-6 pb-4 px-4"
      {...props}
    />
  );
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
      className={cn(
        `p-0 rounded-2xl block h-auto w-full border-1 ${checked ? "bg-[#919eab14] hover:bg-[#919eab14]" : "bg-transparent hover:bg-inherit"}`,
        className,
      )}
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
