import { RefreshCw } from "lucide-react"
import DataTable from "./data-table"
import DataTableNavigation from "./data-table-navigation"

const UserTable = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center gap-2 px-4 py-3 text-lg font-bold text-main">43 USERS <RefreshCw className="size-5" /></div>
      <DataTable />
      <DataTableNavigation />
    </div>
  )
}

export default UserTable