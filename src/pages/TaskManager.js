import { useState } from "react";

export default function TaskManager() {
  const [task, setTask] = useState("");
  const [response, setResponse] = useState(null);

  const handleAllocateTask = async () => {
    if (!task) return alert("Please enter a task!");

    const res = await fetch("/api/allocate", {  // 🔹 Updated API route here
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task }),
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <input
        type="text"
        placeholder="Enter task description"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 w-80 mb-4"
      />
      <button
        onClick={handleAllocateTask}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Allocate Task
      </button>
      {response && (
        <div className="mt-4 p-4 border rounded bg-white shadow">
          <p><strong>Assigned To:</strong> {response.assignedTo}</p>
          <p><strong>Reason:</strong> {response.reason}</p>
        </div>
      )}
    </div>
  );
}
