import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export function Dashboard() {
  const { data: stats } = useQuery({ queryKey: ["dashboard"], queryFn: () => api.get("/api/v1/dashboard/stats") });
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[{ label: "Active Workflows", value: stats?.data?.activeWorkflows ?? 0 },
          { label: "Running Instances", value: stats?.data?.runningInstances ?? 0 },
          { label: "Pending Tasks", value: stats?.data?.pendingTasks ?? 0 },
          { label: "Completed Today", value: stats?.data?.completedToday ?? 0 },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white p-6 rounded-lg shadow-sm border">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-3xl font-bold mt-2">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
