// import { useState } from "react";

// // Static ETH to INR conversion rate
// const ETH_TO_INR_RATE = 250000;

// export default function FakeBlockchainModals() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Fake blockchain logs data
//   const fakeLogs = [
//     { id: 1, purpose: "Tech Club - Equipment", amount: 0.3, hash: "0xabc123fgh..." },
//     { id: 2, purpose: "Cultural Club - Decorations", amount: 0.5, hash: "0xdef456ijk..." },
//     { id: 3, purpose: "Sports Club - Jerseys", amount: 0.4, hash: "0xghi789lmn..." },
//   ];

//   return (
//     <div className="text-white">
//       {/* Open Modal Button */}
//       <button 
//         onClick={() => setIsOpen(true)}
//         className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
//       >
//         View Blockchain Logs 🔍
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
//           <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl max-w-md w-full relative">

//             {/* Close Button */}
//             <button 
//               onClick={() => setIsOpen(false)}
//               className="absolute top-3 right-3 text-gray-300 hover:text-white"
//             >
//               ✕
//             </button>

//             <h2 className="text-xl font-bold mb-4">Fake Blockchain Logs</h2>

//             {/* Log List */}
//             <div className="space-y-3 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
//               {fakeLogs.map((log) => (
//                 <div 
//                   key={log.id} 
//                   className="p-3 border border-gray-600 rounded-lg bg-black/70"
//                 >
//                   <p className="text-sm text-gray-200">🔗 {log.purpose}</p>
//                   <p className="text-xs text-gray-400">
//                     Amount: {log.amount} ETH (~ ₹{(log.amount * ETH_TO_INR_RATE).toLocaleString("en-IN")})
//                   </p>
//                   <p className="text-xs text-gray-500">Hash: {log.hash}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Close Modal Button */}
//             <button 
//               onClick={() => setIsOpen(false)}
//               className="mt-4 w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg"
//             >
//               Close
//             </button>

//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
