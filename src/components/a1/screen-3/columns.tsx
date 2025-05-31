import type { User } from "@/lib/validations";
import type { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../../ui/checkbox";
import { Badge } from "../../ui/badge";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="bg-white"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
  },
  {
    accessorKey: "id",
    header: () => (
      <div className="flex flex-col">
        <span>User Name</span>
        <span>User ID</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-4">
        <img
          src={row.original.avatar}
          alt={row.original.fullname}
          className="w-8 h-8 rounded-full object-cover shrink-0"
        />
        <div className="flex flex-col">
          <span className="font-medium">{row.original.fullname}</span>
          <span className="text-sm text-gray-500">{row.getValue("id")}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Contact Info",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span>{row.getValue("email")}</span>
        <span>{row.original.phoneNumber}</span>
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <span className="capitalize">{row.getValue("type")}</span>
    ),
  },
  {
    accessorKey: "experience",
    header: "Experience",
    cell: ({ row }) => <span>{row.getValue("experience")}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        className={`uppercase ${
          row.getValue("status") === "active"
            ? "text-green-500 bg-green-500/10"
            : "text-red-500 bg-red-500/10"
        }`}
      >
        {row.getValue("status")}
      </Badge>
    ),
  },
];