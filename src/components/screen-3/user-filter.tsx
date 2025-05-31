import { Filter } from "lucide-react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Checkbox } from "../ui/checkbox"
import { Button } from "../ui/button"

const UserFilter = () => {
  return (
    <div className="max-w-3xs w-full p-4 flex flex-col gap-4 border-r">
      <div className="flex items-center justify-between pb-2 border-b text-gray-500">
        <h2 className="text-base font-medium">FILTER</h2>
        <Filter className="size-4" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>User name</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ngocduc">ngocduc</SelectItem>
            <SelectItem value="ngocanh">ngocanh</SelectItem>
            <SelectItem value="hoaithuong">hoaithuong</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label>User ID</Label>
        <Input type="text" placeholder="Input" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>User type</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">admin</SelectItem>
            <SelectItem value="employee">employee</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Phone number</Label>
        <Input type="text" placeholder="Input" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Email address</Label>
        <Input type="text" placeholder="Input" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Status</Label>
        <div className="flex items-center gap-3">
          <Checkbox id="all" />
          <Label htmlFor="all" className="text-sm text-gray-600">All</Label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="active" />
          <Label htmlFor="active" className="text-sm text-gray-600">Active</Label>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="inactive" />
          <Label htmlFor="inactive" className="text-sm text-gray-600">Inactive</Label>
        </div>
      </div>
      <Button variant={"outline"} size={"sm"} className="mt-auto">Export Data</Button>
    </div>
  )
}

export default UserFilter