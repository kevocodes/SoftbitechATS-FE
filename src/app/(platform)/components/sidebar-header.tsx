import { cn } from "@/lib/utils";
import { SidebarCollapseButton } from "./sidebar-collapse-button";
import { useSidebar } from "@/stores/sidebar.store";

export const SidebarHeader = () => {
  const isOpen = useSidebar((state) => state.isOpen);

  return (
    <div className="flex justify-between items-center">
      <p className={cn("text-xl font-bold block", !isOpen && "hidden")}>
        Menú
      </p>
      <SidebarCollapseButton />
    </div>
  );
};
