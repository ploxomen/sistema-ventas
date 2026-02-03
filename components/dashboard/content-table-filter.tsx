import { ContentBox } from "@/components/setting-option";
import Filter from "./filter";
import { ColumnsProps, FilterProps } from "@/types/dashboard/filter";

export default function ContentTableFilter({
  urlExportExcel = "",
  urlExportPdf = "",
  columnsView = [],
  columnsFilter = [],
}: {
  urlExportExcel?: string;
  urlExportPdf?: string;
  columnsView?: ColumnsProps[];
  columnsFilter?: FilterProps[];
}) {
  return (
    <ContentBox className="mt-10 shadow-md">
      <Filter></Filter>
    </ContentBox>
  );
}
