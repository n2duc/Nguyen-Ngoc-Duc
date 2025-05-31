import { ChevronRight, ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"

const WorkPackageCard = ({ index }: { index: number }) => {
  return (
    <div className="border rounded-sm px-3 py-2 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium">Work package {index}</h4>
        <Button variant={"ghost"} size={"icon"}><ChevronRight /></Button>
      </div>
      <p className="text-sm text-gray-600 line-clamp-2">Define system structure, technology stack, and integration flow. Includes do Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, autem dicta iste fugit omnis nesciunt aliquid necessitatibus dolore eius maxime.</p>
      <div className="flex items-center gap-1.5">
        <div className="border border-gray-200 bg-blue-50"><ChevronRight className="text-gray-600" /></div>
        <div className="border border-gray-200 bg-blue-50"><ChevronRight className="text-gray-600" /></div>
      </div>
       <div className="flex items-center justify-between">
        <Button size={"sm"} variant={"secondary"} className="text-main">View Detail</Button>
        <Button size={"sm"} variant={"ghost"}><ShoppingCart className="text-main" /></Button>
       </div>
    </div>
  )
}

export default WorkPackageCard