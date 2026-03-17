import { Input, InputProps } from "@heroui/input";
type InputCustomProps = InputProps;
export default function InputCustom({
  variant = "bordered",
  labelPlacement = "outside-top",
  ...props
}: InputCustomProps) {
  return <Input variant={variant} labelPlacement={labelPlacement} {...props} />;
}
