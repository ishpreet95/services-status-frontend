import { payments } from "@/utils/dummyDataForTable";
import { columns } from "../components/service-status/columns";
import DataTable from "../components/service-status/data-table";

export default async function ServiceStatus() {
  const data = payments;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
