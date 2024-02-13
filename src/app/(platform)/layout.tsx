import { Header } from "./components/navbar";
import { Sidebar } from "./components/sidebar";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="flex justify-between">
        <Sidebar />
        {children}
      </section>
      <footer className="h-14 py-2 px-5 border-t flex justify-center items-center">
        <h1>Footer</h1>
      </footer>
    </main>
  );
}
