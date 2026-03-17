import { Textarea, TextAreaProps } from "@heroui/input";

export default function TextareaCustom({
  variant = "bordered",
  labelPlacement = "outside-top", // Valor por defecto
  ...props
}: TextAreaProps) {
  return (
    <Textarea variant={variant} labelPlacement={labelPlacement} {...props} />
  );
}
