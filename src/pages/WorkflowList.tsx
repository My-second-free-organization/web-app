import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { api } from "@/lib/api";

export function WorkflowList() {
  const { data } = useQuery({ queryKey: ["workflows"], queryFn: () => api.get("/api/v1/workflows") });
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Workflows</h2>
        <Link to="/workflows/new" className="bg-primary-500 text-white px-4 py-2 rounded-lg">New Workflow</Link>
      </div>
      <div className="bg-white rounded-lg shadow-sm border">
        {(data?.data?.workflows ?? []).map((wf: any) => (
          <Link key={wf.id} to={`/workflows/${wf.id}`} className="block p-4 border-b hover:bg-gray-50">
            <div className="font-medium">{wf.name}</div>
            <div className="text-sm text-gray-500">{wf.status} &middot; v{wf.version}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
