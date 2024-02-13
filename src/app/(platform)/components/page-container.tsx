export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 py-6 w-full min-h-[calc(100vh-56px)] bg-muted/20">
      {children}
    </div>
  );
};
