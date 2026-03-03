export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">FlowForge</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">user@flowforge.io</span>
      </div>
    </header>
  );
}
