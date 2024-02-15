import { Laptop, LogOut } from "lucide-react";
import { useSidebar } from "@/stores/sidebar.store";
import { SidebarItem, SidebarItemLogout } from "./sidebar-item";

interface SidebarContentProps {
  isMobile?: boolean;
}

export const SidebarContent = ({ isMobile }: SidebarContentProps) => {
  const isOpen = useSidebar((state) => state.isOpen);
  const isSidebarOpen = !isMobile ? isOpen : true;

  return (
    <>
      <SidebarItem label="Tecnologías" to="/" isSidebarOpen={isSidebarOpen}>
        <Laptop size={24} />
      </SidebarItem>

      <SidebarItemLogout label="Cerrar sesión" isSidebarOpen={isSidebarOpen}>
        <LogOut size={24} />
      </SidebarItemLogout>
    </>
  );
};
