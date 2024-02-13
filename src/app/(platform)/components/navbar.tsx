import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./mobile-sidebar";

export function Header() {
  return (
    <header className="h-14 py-2 px-5 border-b flex justify-between items-center sticky top-0 z-50 bg-background/60 backdrop-blur-sm backdrop-filter">
      <MobileSidebar />

      <h1>Softbitech</h1>
      <ThemeSwitcher />
    </header>
  );
}
