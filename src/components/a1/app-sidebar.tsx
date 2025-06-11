import { LayoutDashboard, CircleHelp, Calculator, SquarePen, BookOpenText, Building2, ExternalLink } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import logo from "@/assets/logo.jpg";
import LogoCompany from "@/assets/LOGO.png";

const items = {
  navMain: [
    {
      title: "Overview",
      href: "#",
      icon: LayoutDashboard,
    },
    {
      title: "Inquiries",
      href: "#",
      icon: CircleHelp,
    },
    {
      title: "Estimates",
      href: "#",
      icon: Calculator,
    },
    {
      title: "Projects",
      href: "#",
      icon: SquarePen,
    }
  ],
  navSecondary: [
    {
      title: "Administrations",
      href: "#",
      icon: Building2,
    },
    {
      title: "Documentation",
      href: "#",
      icon: BookOpenText,
    },
  ]
}

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className='p-3'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-16"
            >
              <img src={logo} className="size-12 object-cover rounded-sm shrink" />
              <div className='grid flex-1 text-left text-sm leading-tight text-main'>
                <span className="truncate font-bold">ABC Company</span>
                <span className='truncate text-xs'>Lisa Rose</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className='p-3'>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className='mt-auto p-3'>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.navSecondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='p-3'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <div className='h-8 w-8 overflow-hidden shrink-0'>
                <img src={LogoCompany} alt="logo" className='w-full h-full' />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-bold text-main">RIVER FLOW</span>
                <span className="truncate text-xs font-semibold tracking-widest text-[hsl(151_100%_35%)]">
                  SOLUTIONS
                </span>
              </div>
              <ExternalLink className="ml-auto size-4 text-main" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar