import Dashboard from "../ui/dashboard/Dashboard-desktop";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row sm:overflow-hidden">
      <div className="flex-none">
        <Dashboard />
      </div>
      <div className="flex-grow p-8 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
