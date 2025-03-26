import { useState } from "react";
import { motion } from "framer-motion";

export default function Executivetask() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Paste posters at V Block", status: "assigned", declineReason: "", proof: null, votes: 0, verified: false, reassignedTo: "" },
    { id: 2, title: "Setup standees at Q Block", status: "assigned", declineReason: "", proof: null, votes: 0, verified: false, reassignedTo: "" },
  ]);

  const reassignTo = ["Kavya", "Rishika", "Manas"];

  const handleAccept = (id) => {
    setTasks((tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, status: "accepted" } : t))
    );
  };

  const handleDecline = (id) => {
    const reason = prompt("Reason to decline?");
    if (reason) {
      const randomPerson = reassignTo[Math.floor(Math.random() * reassignTo.length)];
      setTasks((tasks) =>
        tasks.map((t) =>
          t.id === id
            ? { ...t, status: "declined", declineReason: reason, reassignedTo: randomPerson }
            : t
        )
      );
    }
  };

  const handleComplete = (id, file) => {
    setTasks((tasks) =>
      tasks.map((t) =>
        t.id === id ? { ...t, status: "completed", proof: file } : t
      )
    );
  };

  const handleVote = (id) => {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === id) {
          const updatedVotes = t.votes + 1;
          if (updatedVotes >= 2) {
            return { ...t, votes: updatedVotes, verified: true };
          }
          return { ...t, votes: updatedVotes };
        }
        return t;
      })
    );
  };

  return (
    <div className="space-y-8 text-white font-sans">
     <h1 className="text-4xl font-bold text-center mb-2">AI Powered Task Dashboard 🚀</h1>
<p className="text-center text-gray-400 mb-8">Event Name: <span className="text-white font-semibold">Tech Talks</span> <br /> organized by <span className="text-white font-semibold">TechnoClubs</span></p>


      {/* Tasks Section */}
      <section className="grid gap-8 max-w-xl mx-auto">

        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`relative p-5 rounded-2xl border ${
              task.verified
                ? "border-green-500 bg-gradient-to-br from-green-900/50 to-green-800/30"
                : "border-gray-700 bg-gray-900"
            } shadow-lg`}
          >
            <p className="text-xl font-semibold">{task.title}</p>

            {/* Reward Badge */}
            {task.verified && (
              <motion.div
                className="absolute top-3 right-3 bg-green-600 text-sm font-bold px-3 py-1 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                +10 pts
              </motion.div>
            )}

            {/* Status specific actions */}
            {task.status === "assigned" && (
              <div className="flex space-x-3 mt-4">
                <button onClick={() => handleAccept(task.id)} className="px-4 py-2 bg-green-500 rounded text-sm">Accept</button>
                <button onClick={() => handleDecline(task.id)} className="px-4 py-2 bg-red-500 rounded text-sm">Decline</button>
              </div>
            )}

            {task.status === "declined" && (
              <div className="mt-4 text-sm text-red-400 space-y-1">
                <p>Declined: {task.declineReason}</p>
                <p className="text-yellow-400">Auto-Reassigned to: <span className="font-bold">{task.reassignedTo}</span></p>
              </div>
            )}

            {task.status === "accepted" && (
              <div className="mt-4 space-y-2">
                <input
                  type="file"
                  onChange={(e) =>
                    e.target.files[0] && handleComplete(task.id, e.target.files[0].name)
                  }
                  className="block text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
            )}

            {task.status === "completed" && !task.verified && (
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Proof: {task.proof}</p>
                <p className="text-sm text-gray-400 mb-1">Votes: {task.votes} ✅</p>
                <button
                  onClick={() => handleVote(task.id)}
                  className="px-4 py-2 bg-purple-500 rounded text-sm"
                >
                  Vote to Verify
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </section>
    </div>
  );
}
