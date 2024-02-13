"use client";
import { Button } from "@/components/ui/button";
import { SheetContent, SheetTrigger, Sheet } from "@/components/ui/sheet";
import { SidebarContent } from "./sidebar-content";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export const MobileSidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(
    function CloseOnRouteChange() {
      close();
    },
    [pathname]
  );

  return (
    <>
      <Button
        size="icon"
        className="flex md:hidden text-center"
        variant="outline"
        onClick={open}
      >
        <Menu size={20} className="text-foreground" />
      </Button>
      <Sheet open={isOpen} onOpenChange={close}>
        <SheetContent
          side="left"
          className="pt-12 flex flex-col gap-4 overflow-auto"
        >
          <p className="text-2xl font-bold block">Menú</p>
          <SidebarContent isMobile />
        </SheetContent>
      </Sheet>
    </>
  );
};
