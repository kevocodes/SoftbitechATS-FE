"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/stores/sidebar.store";
import { SidebarContent } from "./sidebar-content";
import { SidebarHeader } from "./sidebar-header";

export const Sidebar = () => {
  const isOpen = useSidebar((state) => state.isOpen);

  return (
    <aside
      className={cn(
        "top-14 z-30 h-[calc(100vh-56px)] max-w-64 hidden w-auto md:flex md:flex-col md:gap-4 md:sticky shrink-0 border-r border-border py-6 px-4 overflow-auto tranbsition-all",
        isOpen && "w-full"
      )}
    >
      <SidebarHeader />
      <SidebarContent />
    </aside>
  );
};
