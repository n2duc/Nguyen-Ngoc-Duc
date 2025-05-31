import UserFilter from "@/components/a1/screen-3/user-filter"
import UserInformation from "@/components/a1/screen-3/user-information"
import UserNav from "@/components/a1/screen-3/user-nav"
import UserTable from "@/components/a1/screen-3/user-table"
import { Home } from "lucide-react"

const UserManagement = () => {
  return (
    <main className="flex flex-col min-h-svh">  
      <header className="h-[60px] w-full bg-main flex items-center">
        <div className="mx-14 flex items-center justify-between w-full">
          <div className="flex items-center gap-16">
            <h1 className="text-base font-bold text-green-500">COMPANY LOGO XXX</h1>
            <div className="flex items-center gap-4">
              <Home className="size-[30px] text-white fill-current" />
              <div className="bg-white/90 px-5 py-1 text-main rounded-sm">
                <p className="text-xs">Module</p>
                <h4 className="text-sm font-bold">USER MANAGEMENT</h4>
              </div>
            </div>
          </div>
          <UserNav />
        </div>
      </header>
      <div className="flex-1 flex">
        <UserFilter />
        <UserTable />
        <UserInformation />
      </div>
    </main>
  )
}

export default UserManagement