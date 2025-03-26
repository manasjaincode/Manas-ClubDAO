import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ClubWalletSummary() {
  const [onChainLogs, setOnChainLogs] = useState([]);
  const [totalOnChain, setTotalOnChain] = useState(0);

  const ethToInr = 185000; // Fake ETH->INR rate for demo

  const motionValue = useMotionValue(0);
  const animatedInr = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const displayInr = useTransform(animatedInr, (value) =>
    `₹ ${Math.round(value).toLocaleString("en-IN")}`
  );

  useEffect(() => {
    const loadLogs = async () => {
      if (typeof window !== "undefined") {
        const { fetchTransactionLogs } = await import("@/lib/blockchainUtils");
        const logs = await fetchTransactionLogs();
        setOnChainLogs(logs);
        const totalEth = logs.reduce((sum, log) => sum + parseFloat(log.amount), 0);
        setTotalOnChain(totalEth);
        motionValue.set(totalEth * ethToInr);
      }
    };
    loadLogs();
  }, [motionValue]);

  return (
    <div className="bg-black border border-gray-600 p-6 rounded-2xl shadow-xl w-full max-w-5xl mx-auto mt-6 flex flex-col gap-4">
      {/* Header + Balance */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-white font-bold">Club Wallet Overview</h2>
        <div className="space-y-1 text-right">
          <p className="text-gray-300 text-sm">
            💰 Balance:{" "}
            <span className="text-green-400">{totalOnChain.toFixed(2)} ETH</span>
          </p>
          <motion.p className="text-green-400 text-xl font-extrabold">
            {displayInr}
          </motion.p>
        </div>
      </div>

      {/* Logs Section */}
      <div>
        <h3 className="text-md text-white font-semibold mb-2">
          Recent Blockchain Logs (Dean View)
        </h3>
        <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
          {onChainLogs.map((log, idx) => (
            <div
              key={idx}
              className="p-2 rounded-lg border border-gray-500 bg-gray-900 text-sm flex justify-between items-center"
            >
              <div>
                <p className="text-gray-200">🔗 {log.purpose}</p>
                <p className="text-gray-400 text-xs">TX: {log.txHash.slice(0, 10)}...</p>
              </div>
              <p className="text-green-400">{log.amount} ETH</p>
            </div>
          ))}
          {onChainLogs.length === 0 && (
            <p className="text-gray-500">No logs found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
