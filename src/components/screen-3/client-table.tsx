import { FileText } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Progress } from "../ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"

const ClientTable = () => {
  return (
    <div className="border">
      <Table>
        <TableHeader className="bg-blue-100">
          <TableRow>
            <TableHead className="h-12">Index</TableHead>
            <TableHead  className="h-12">
              <div className="flex flex-col">
                <span>Browser Name</span>
                <span>Loan ID</span>
              </div>
            </TableHead>
            <TableHead className="h-12">
              <div className="flex flex-col">
                <span>Lender</span>
                <span>Interest Rate</span>
              </div>
            </TableHead>
            <TableHead className="h-12">Process</TableHead>
            <TableHead className="h-12">Status</TableHead>
            <TableHead className="h-12">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span>Ms. Hang Nguyen</span>
                <span className="text-gray-400">#LA00001</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span>AD Mortgage</span>
                <span className="text-gray-400">6% (6.168% APR)</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress className="h-1.5" value={68} />
                <span>68%</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge className="bg-blue-500/20 text-blue-500">IN PROGRESS</Badge>
            </TableCell>
            <TableCell>
              <Button size={"icon"} variant={"ghost"}>
                <FileText className="size-4 text-blue-500" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>02</TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span>Ms. Hang Nguyen</span>
                <span className="text-gray-400">#LA00001</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span>AD Mortgage</span>
                <span className="text-gray-400">6% (6.168% APR)</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress className="h-1.5" value={68} />
                <span>68%</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge className="bg-blue-500/20 text-blue-500">IN PROGRESS</Badge>
            </TableCell>
            <TableCell>
              <Button size={"icon"} variant={"ghost"}>
                <FileText className="size-4 text-blue-500" />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default ClientTable