import { ArrowRight, Search } from "lucide-react"
import { Input } from "../ui/input"
import WorkPackageCard from "./work-package-card"
import { Button } from "../ui/button"

const WorkPackageList = () => {
  return (
    <div className="flex-1 flex flex-col min-h-0 h-full">
      <div className="relative">
        <Input type="text" className="pl-8" />
        <Search className="absolute left-3 size-4 top-2.5" />
      </div>
      <div className="mt-4 flex-1">
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          {Array.from({ length: 9 }).map((_, index) => (
            <WorkPackageCard key={index} index={index + 1} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-end">
        <Button variant={"outline"} className="ml-auto text-main border-main hover:text-main">Next <ArrowRight /></Button>
      </div>
    </div>
  )
}

export default WorkPackageList