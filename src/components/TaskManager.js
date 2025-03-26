import { useState } from "react";

export default function TaskManager() {
  const [task, setTask] = useState("");
  const [response, setResponse] = useState(null);
  const [useAi, setUseAi] = useState(false);

  const tasks = [
    { name: "Anchor", description: "Host the event" },
    { name: "Technical Person", description: "Handle technical issues" },
    { name: "Video Editing", description: "Edit event videos" },
    { name: "Event Operations", description: "Manage event logistics" },
  ];

  const allocateTaskManually = (taskDescription) => {
    let assignedTo = "";
    let reason = "";
    switch (taskDescription) {
      case "Host the event":
        assignedTo = "Frank";
        reason = "Frank has experience in Anchoring and Event Management.";
        break;
      case "Handle technical issues":
        assignedTo = "Bob";
        reason = "Bob is a Backend Developer and handles technical operations.";
        break;
      case "Edit event videos":
        assignedTo = "Eve";
        reason = "Eve specializes in Video Editing and Content Creation.";
        break;
      case "Manage event logistics":
        assignedTo = "Dave";
        reason = "Dave has expertise in Project Management and Event Operations.";
        break;
      default:
        assignedTo = "Alice";
        reason = "Alice can manage UI and Frontend tasks.";
        break;
    }
    return { assignedTo, reason };
  };

  const handleAllocateTask = async () => {
    if (!task) return alert("Please select or enter a task!");

    if (useAi) {
      const res = await fetch("/api/allocate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task }),
      });
      const data = await res.json();
      setResponse(data);
    } else {
      const taskDescription = tasks.find((t) => t.name === task)?.description;
      const allocation = allocateTaskManually(taskDescription);
      setResponse(allocation);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black border border-gray-600 rounded-xl p-8 shadow-lg">
      <h1 className="text-white text-2xl font-bold mb-4">AI Task Manager</h1>

      <h2 className="text-gray-300 text-sm mb-2">Available Tasks</h2>
      <div className="grid grid-cols-2 gap-3 mb-5">
        {tasks.map((task) => (
          <button
            key={task.name}
            onClick={() => {
              setTask(task.name);
              setUseAi(false);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-3 rounded"
          >
            {task.name}
          </button>
        ))}
      </div>

      <label htmlFor="taskInput" className="block text-xs text-gray-300 mb-1">
        Or enter a custom task:
      </label>
      <input
        id="taskInput"
        type="text"
        placeholder="Enter task description"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full px-4 py-3 rounded bg-gray-800 text-white text-sm border border-gray-700 mb-4"
      />

      <div className="flex items-center mb-4">
        <input
          id="aiToggle"
          type="checkbox"
          checked={useAi}
          onChange={() => setUseAi(!useAi)}
          className="mr-2"
        />
        <label htmlFor="aiToggle" className="text-xs text-gray-300">
          Use AI for Task Allocation
        </label>
      </div>

      <button
        onClick={handleAllocateTask}
        className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-3 rounded"
      >
        Allocate Task
      </button>

      {response && (
        <div className="mt-5 p-4 border border-gray-500 rounded bg-gray-900 text-white text-sm">
          <p><strong>Assigned To:</strong> {response.assignedTo}</p>
          <p><strong>Reason:</strong> {response.reason}</p>
        </div>
      )}
    </div>
  );
}
