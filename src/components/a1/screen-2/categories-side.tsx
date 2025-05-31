import { List } from "lucide-react"
import { Button } from "../../ui/button"
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs"

const CategoriesSide = () => {
  return (
    <div className="max-w-[200px] w-full flex flex-col min-h-0 h-full">
      <Tabs defaultValue="rfx">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="rfx" className="text-gray-500 data-[state=active]:bg-blue-50 data-[state=active]:text-main">RFX WPs</TabsTrigger>
          <TabsTrigger value="custom" className="text-gray-500 data-[state=active]:bg-blue-50 data-[state=active]:text-main">Custom WPs</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex-1 mt-5">
        <h5 className="text-lg font-medium">Categories</h5>
        <ul className="mt-2 space-y-2">
          <li className="text-sm text-gray-600 pb-2 border-b border-gray-400 hover:text-main cursor-pointer">All Work Packages</li>
          <li className="text-sm text-gray-600 pb-2 border-b border-gray-400 hover:text-main cursor-pointer">Architectural WPs</li>
          <li className="text-sm text-gray-600 pb-2 border-b border-gray-400 hover:text-main cursor-pointer">Development WPs</li>
          <li className="text-sm text-gray-600 pb-2 border-b border-gray-400 hover:text-main cursor-pointer">Operation WPs</li>
          <li className="text-sm text-gray-600 pb-2 border-b border-gray-400 hover:text-main cursor-pointer">Basic</li>
          <li className="text-sm text-gray-600 pb-2 border-b border-gray-400 hover:text-main cursor-pointer">Comprehensive</li>
          <li className="text-sm text-gray-600 pb-2 border-b border-gray-400 hover:text-main cursor-pointer">Advanced</li>
        </ul>
      </div>
      <Button className="text-main hover:text-main mt-auto" variant={"ghost"}><List /> How to add custom WPs</Button>
    </div>
  )
}

export default CategoriesSide