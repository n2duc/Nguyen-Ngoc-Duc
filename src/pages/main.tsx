import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router";

const Main = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>A1: Layout Implementation</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <Link to={"/a1/screen-1"} prefetch="intent">
              <DropdownMenuItem className="w-full">
                Screen 1: Sticket Detail
              </DropdownMenuItem>
            </Link>
            <Link to={"/a1/screen-2"} prefetch="intent">
              <DropdownMenuItem className="w-full">
                Screen 2: Work Packages
              </DropdownMenuItem>
            </Link>
            <Link to={"/a1/screen-3"} prefetch="intent">
              <DropdownMenuItem className="w-full">
                Screen 3: User Management
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link to={"/a2"} prefetch="intent">
          <Button className="w-full">A2: JSON form rendering components</Button>
        </Link>
        <Link to={"/a3"} prefetch="intent">
          <Button className="w-full">A3: Paginated component</Button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
