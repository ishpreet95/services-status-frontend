import { payments } from "@/utils/dummyDataForTable";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default async function ServiceStatus() {
  const data = payments;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
