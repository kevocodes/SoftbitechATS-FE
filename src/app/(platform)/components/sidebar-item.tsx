"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  children?: React.ReactNode;
  label: string;
  to: string;
  isSidebarOpen?: boolean;
}

export const SidebarItem = ({
  label,
  children,
  to,
  isSidebarOpen,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <Link
      href={to}
      className={cn(
        "px-4 py-3 rounded-md transition-all flex gap-3 items-center",
        isActive && "bg-primary text-primary-foreground",
        !isActive && "hover:bg-muted",
        !isSidebarOpen && "justify-center"
      )}
    >
      {children}
      <p className={cn(!isSidebarOpen && "hidden", isSidebarOpen && "block")}>
        {label}
      </p>
    </Link>
  );
};
