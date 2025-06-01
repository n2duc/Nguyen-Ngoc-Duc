import type { Customer } from "@/lib/validations";
import type { ColumnDef } from "@tanstack/react-table";
import ColumnHeader from "./column-header";
import { Badge } from "../ui/badge";

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "index",
    header: ({ column }) => (
      <ColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => (
      <span className="ml-3">{row.getValue("index")}</span>
    )
  },
  {
    accessorKey: "customerId",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Customer ID" className="flex flex-col items-start" />
    ),
    cell: ({ row }) => (
      <span>{row.getValue("customerId")}</span>
    ),
    enableSorting: false,
  },
   {
    accessorKey: "firstName",
    header: ({ column }) => (
      <ColumnHeader column={column} title="First Name" />
    ),
    cell: ({ row }) => (
      <span className="ml-3">{row.getValue("firstName")}</span>
    )
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Last Name" />
    ),
    cell: ({ row }) => (
      <span className="ml-3">{row.getValue("lastName")}</span>
    )
  },
  {
    accessorKey: "company",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Company" />
    ),
    cell: ({ row }) => (
      <span className="ml-3">{row.getValue("company")}</span>
    )
  },
  {
    accessorKey: "city",
    header: ({ column }) => (
      <ColumnHeader column={column} title="City" />
    ),
    cell: ({ row }) => (
      <span className="ml-3">{row.getValue("city")}</span>
    )
  },
  {
    accessorKey: "phone1",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Phone 1" />
    ),
    cell: ({ row }) => (
      <span className="ml-3">{row.getValue("phone1")}</span>
    )
  },
  {
    accessorKey: "phone2",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Phone 2" />
    ),
    cell: ({ row }) => (
      <span className="ml-3">{row.getValue("phone2")}</span>
    )
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <span className="ml-3">{row.getValue("email")}</span>
    )
  },
  {
    accessorKey: "subscriptionDate",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Subscription Date" />
    ),
    cell: ({ row }) => (
      <Badge className="ml-3">{row.getValue("subscriptionDate")}</Badge>
    )
  },
  {
    accessorKey: "website",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Website" />
    ),
    cell: ({ row }) => (
      <span className="ml-3">{row.getValue("website")}</span>
    )
  }
]