import React from "react";

const ConflictResolution = () => {
  const conflicts = [
    {
      club1: "Music Club",
      club2: "Drama Club",
      issue: "Same Date & Venue Conflict",
      date: "March 25, 2025",
      venue: "Auditorium",
      status: "Pending",
    },
    {
      club1: "Coding Club",
      club2: "Robotics Club",
      issue: "Resource Misallocation Conflict",
      date: "March 27, 2025",
      venue: "Tech Lab",
      status: "Pending",
    },
    {
      club1: "Art Club",
      club2: "Photography Club",
      issue: "Event Overlap",
      date: "April 2, 2025",
      venue: "Exhibition Hall",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg w-full">
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Conflict Resolution</h2>
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-[800px] w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-700 text-gray-300">
              <th className="p-4">Clubs</th>
              <th className="p-4">Issue</th>
              <th className="p-4">Date</th>
              <th className="p-4">Venue</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {conflicts.map((conflict, index) => (
              <tr key={index} className="border-b border-slate-600 text-gray-300">
                <td className="p-4">{conflict.club1} vs {conflict.club2}</td>
                <td className="p-4">{conflict.issue}</td>
                <td className="p-4">{conflict.date}</td>
                <td className="p-4">{conflict.venue}</td>
                <td className="p-4 text-red-400 font-semibold">{conflict.status}</td>
                <td className="p-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                    Resolve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConflictResolution;
