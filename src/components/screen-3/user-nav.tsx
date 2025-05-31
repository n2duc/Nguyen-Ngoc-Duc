import { Bell, Settings, CircleUserRound, ChevronDown } from "lucide-react"
import { Button } from "../ui/button"

const UserNav = () => {
  return (
    <nav className="flex items-center gap-4">
      <Button size={"icon"} variant={"ghost"} className="hover:bg-transparent">
        <Bell className="size-7 text-white fill-current" />
      </Button>
      <Button size={"icon"} variant={"ghost"} className="hover:bg-transparent">
        <Settings className="size-7 text-white" />
      </Button>
      <div className="flex items-center gap-4">
        <CircleUserRound className="size-7 text-white" />
        <div>
          <h4 className="text-sm font-bold text-white">Mr. David Nguyen</h4>
          <p className="text-xs text-white">Home Company</p>
        </div>
        <ChevronDown className="size-5 text-white ml-1" />
      </div>
    </nav>
  )
}

export default UserNav