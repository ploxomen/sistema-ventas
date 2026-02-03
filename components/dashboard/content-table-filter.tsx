import { ContentBox } from "@/components/setting-option";
import Filter from "./filter";
import { ColumnsProps, FilterProps } from "@/types/dashboard/filter";

export default function ContentTableFilter({
  urlExportExcel = "",
  urlExportPdf = "",
  columnsView = [],
  columnsFilter = [],
  children
}: {
  urlExportExcel?: string;
  urlExportPdf?: string;
  columnsView?: ColumnsProps[];
  columnsFilter?: FilterProps[];
  children?: React.ReactNode;
}) {
  return (
    <ContentBox className="mt-10 shadow-md">
      <Filter>{children}</Filter>
    </ContentBox>
  );
}
