export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="@container px-4 py-6 w-full min-h-[calc(100vh-56px)] bg-muted/20 flex flex-col gap-4 overflow-auto items-center">
      {children}
    </article>
  );
};
