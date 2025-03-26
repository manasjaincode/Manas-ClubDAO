import React from "react";

const BudgetApproval = () => {
  // Predefined Budget Items
  const budgetItems = [
    { purpose: "Venue Booking", amount: "₹1,50,000", remarks: "Main Hall for 2 days" },
    { purpose: "Catering & Refreshments", amount: "₹80,000", remarks: "Lunch & Snacks for 200 people" },
    { purpose: "Technical Equipment", amount: "₹1,20,000", remarks: "Sound, LED Screens, and Projectors" },
    { purpose: "Marketing & Promotions", amount: "₹50,000", remarks: "Posters, Banners, and Online Ads" },
    { purpose: "Guest Speaker Honorarium", amount: "₹70,000", remarks: "Travel & Stay for 3 Speakers" },
  ];

  return (
    <div className="bg-black text-gray-100 p-8 rounded-3xl shadow-2xl w-full max-w-[700px] mx-auto">
      <h2 className="text-2xl font-bold mb-5 text-green-400">Event Budget Overview</h2>
      <div className="bg-slate-900 p-6 rounded-xl mb-6">
        <p className="text-xl">
          📋 <span className="text-green-400">Total Budget Requested:</span> ₹4,70,000
        </p>
      </div>

      <h3 className="text-lg text-gray-400 mb-3 font-semibold">Budget Breakdown</h3>
      <div className="overflow-hidden rounded-xl max-h-72 overflow-y-auto space-y-3 pr-2">
        {budgetItems.map((item, index) => (
          <div key={index} className="bg-slate-800 p-5 rounded-lg hover:scale-[1.02] transition">
            <p className="text-gray-200 font-semibold text-lg">📌 Purpose: {item.purpose}</p>
            <p className="text-green-400 text-md">Amount: {item.amount}</p>
            <p className="text-gray-500 text-sm">Remarks: {item.remarks}</p>
          </div>
        ))}
      </div>

      <button className="mt-6 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition w-full text-lg font-semibold shadow-md">
        🚀 Send to Dean for Approval
      </button>
    </div>
  );
};

export default BudgetApproval;
