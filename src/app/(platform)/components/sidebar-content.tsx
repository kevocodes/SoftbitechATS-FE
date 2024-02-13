import { Laptop, Settings } from "lucide-react";
import { useSidebar } from "@/stores/sidebar.store";
import { SidebarItem } from "./sidebar-item";

interface SidebarContentProps {
  isMobile?: boolean;
}

export const SidebarContent = ({ isMobile }: SidebarContentProps) => {
  const isOpen = useSidebar((state) => state.isOpen);
  const isSidebarOpen = !isMobile ? isOpen : true;

  return (
    <>
      <SidebarItem label="Dashboard" to="/" isSidebarOpen={isSidebarOpen}>
        <Laptop size={24} />
      </SidebarItem>
      <SidebarItem
        label="Settings"
        to="/settings"
        isSidebarOpen={isSidebarOpen}
      >
        <Settings size={24} />
      </SidebarItem>
    </>
  );
};
