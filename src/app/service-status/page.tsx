import { dummyServiceStatusData } from '@/utils/dummyDataForTable'
import { columns } from './service-status-columns'
import DataTable from './service-status-data-table'

export default async function ServiceStatus() {
  const data = dummyServiceStatusData

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}
