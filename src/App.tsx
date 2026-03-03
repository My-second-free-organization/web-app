import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/Layout";
import { Dashboard } from "@/pages/Dashboard";
import { WorkflowList } from "@/pages/WorkflowList";
import { WorkflowEditor } from "@/pages/WorkflowEditor";
import { TaskList } from "@/pages/TaskList";
import { Analytics } from "@/pages/Analytics";
import { Settings } from "@/pages/Settings";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="workflows" element={<WorkflowList />} />
            <Route path="workflows/:id" element={<WorkflowEditor />} />
            <Route path="tasks" element={<TaskList />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
