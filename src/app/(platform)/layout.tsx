export default function PlatformLayout({ children }: { children: React.ReactNode } ) {
  return (
    <main className="min-h-[100vh] bg-red-400">
      <div>
        <h1>Platform Layout navbar</h1>
      </div>
      {children}
    </main>
  )
}