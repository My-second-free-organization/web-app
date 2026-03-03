import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";

export function useWorkflows() {
  return useQuery({ queryKey: ["workflows"], queryFn: () => api.get("/api/v1/workflows").then(r => r.data) });
}

export function useCreateWorkflow() {
  const qc = useQueryClient();
  return useMutation({ mutationFn: (data: any) => api.post("/api/v1/workflows", data), onSuccess: () => qc.invalidateQueries({ queryKey: ["workflows"] }) });
}
