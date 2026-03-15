import { LucideIcon } from "lucide-react";
import { ContentBox } from "../setting-option";
type PoptSubTitleCard = {
  title: string;
  description?: string;
  icon?: LucideIcon;
};
export default function SubTitleCard({
  title,
  description,
  icon: Icon,
}: PoptSubTitleCard) {
  return (
    <ContentBox className="flex gap-1 flex-col">
      <ContentBox className="flex gap-1 font-bold items-center">
        {Icon && <Icon className="text-primary" size={20} />}
        <h2 className="text-primary text-lg">{title}</h2>
      </ContentBox>
      {description && <p className="text-sm text-slate-500">{description}</p>}
    </ContentBox>
  );
}
