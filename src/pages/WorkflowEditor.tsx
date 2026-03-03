import { useParams } from "react-router-dom";

export function WorkflowEditor() {
  const { id } = useParams();
  return <div><h2 className="text-2xl font-bold mb-6">Workflow Editor</h2><p>Editing workflow: {id}</p></div>;
}
