"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { logout } from "@/actions/auth/logout.action";

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

export const SidebarItemLogout = ({
  label,
  children,
  isSidebarOpen,
}: Omit<SidebarItemProps, "to">) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form action={logout} ref={formRef}>
      <button
        onClick={() => formRef.current?.submit()}
        className={cn(
          "px-4 py-3 rounded-md transition-all flex gap-3 items-center hover:bg-muted w-full",
          !isSidebarOpen && "justify-center"
        )}
      >
        {children}
        <p className={cn(!isSidebarOpen && "hidden", isSidebarOpen && "block")}>
          {label}
        </p>
      </button>
    </form>
  );
};
