import CategoriesSide from "@/components/screen-2/categories-side";
import WorkPackageList from "@/components/screen-2/work-package-list";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { List } from "lucide-react";

const WorkPackages = () => {
  return (
    <SidebarInset className="px-4">
      <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Estimator
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-main">Work Packages</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Button className="rounded-full bg-main hover:bg-main/90"><List /> View Summary</Button>
      </header>
      <div className="flex flex-1 gap-4 pt-0">
        <div className="max-w-[1160px] w-full mx-auto my-4 flex flex-col">
          <h2 className="text-xl mb-8">Work Packages (WP)</h2>
          <div className="w-full flex gap-6 flex-1">
            <CategoriesSide />
            <WorkPackageList />
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}

export default WorkPackages