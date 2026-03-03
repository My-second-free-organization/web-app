import { NavLink } from "react-router-dom";
import { LayoutDashboard, GitBranch, CheckSquare, BarChart3, Settings } from "lucide-react";

const nav = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/workflows", icon: GitBranch, label: "Workflows" },
  { to: "/tasks", icon: CheckSquare, label: "Tasks" },
  { to: "/analytics", icon: BarChart3, label: "Analytics" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="text-xl font-bold text-primary-700 mb-8">FlowForge</div>
      <nav className="space-y-1">
        {nav.map(({ to, icon: Icon, label }) => (
          <NavLink key={to} to={to} className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? "bg-primary-50 text-primary-700" : "text-gray-600 hover:bg-gray-50"}`
          }>
            <Icon size={20} /><span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
