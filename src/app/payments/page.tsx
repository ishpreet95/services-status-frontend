import { payments } from '@/utils/dummyDataForTable'
import { Payment, columns } from './payment-columns'
import DataTable from './payments-data-table'
export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={payments} />
    </div>
  )
}
