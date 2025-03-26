import { useEffect, useState } from "react";
import data from "@/data/fakeBlockchain.json";

export default function SpendingApprovals() {
  const [pending, setPending] = useState([]);

  useEffect(() => {
    setPending(data.pendingApprovals);
  }, []);

  const handleAction = (id, action) => {
    setPending((prev) => prev.filter((req) => req.id !== id));
    console.log(`Dean ${action} request ID: ${id}`);
  };

  return (
    <div className="bg-black border border-gray-600 p-6 rounded-2xl shadow-xl w-full mx-auto mt-6 flex flex-col gap-4 max-w-[95vw]">
      <h2 className="text-3xl text-white font-bold">Pending Spending Requests</h2>

      <div className="space-y-2">
        {pending.map((req) => (
          <div
            key={req.id}
            className="p-3 rounded-lg border border-gray-500 bg-gray-900 flex justify-between items-center"
          >
            <div>
              <p className="text-gray-200 text-base font-semibold">
                {req.club} - {req.purpose}
              </p>
              <p className="text-gray-400 text-sm">Amount: {req.amount}</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => handleAction(req.id, "approved")}
                className="px-4 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition"
              >
                Approve
              </button>
              <button
                onClick={() => handleAction(req.id, "rejected")}
                className="px-4 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
        {pending.length === 0 && (
          <p className="text-gray-500 text-base">No pending requests 🎉</p>
        )}
      </div>
    </div>
  );
}
