import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Placard02 from "@/components/Placard02";
import ClubWalletSummary from "@/components/ClubWallet/ClubWalletSummary";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl flex justify-between items-center px-6 py-3 transition-all duration-300 border-2 border-gray-500 rounded-[20px] ${
        isScrolled ? "bg-black/40 backdrop-blur-md" : "bg-black"
      }`}
    >
      <div className="flex items-center space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3f8d48"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />
        </svg>

        <div>
          <h1 className="text-white text-lg font-semibold">Club DAO</h1>
          <p className="text-gray-400 text-sm">Medicaps University</p>
        </div>
      </div>

      <button
        onClick={() => router.push("/")}
        className="px-4 py-1.5 text-white border border-green-400 rounded-full hover:bg-green-500 transition"
      >
        Home
      </button>
    </nav>
  );
};

const SpendingApprovals = () => {
  const [pending, setPending] = useState([
    { id: 1, club: "Tech Club", purpose: "Event Setup", amount: 0.5 },
    { id: 2, club: "Cultural Club", purpose: "Venue Booking", amount: 0.7 },
  ]);
  const [ethToInr, setEthToInr] = useState(null);

  const handleAction = (id, action) => {
    setPending((prev) => prev.filter((req) => req.id !== id));
    console.log(`Dean ${action} request ID: ${id}`);
  };

  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr"
        );
        const data = await res.json();
        setEthToInr(data.ethereum.inr);
      } catch (error) {
        console.error("Error fetching ETH to INR:", error);
      }
    };
    fetchEthPrice();
  }, []);

  return (
    <div className="bg-black border border-gray-600 p-4 rounded-2xl shadow-lg w-full max-w-2xl mx-auto">
      <h2 className="text-xl text-white font-bold mb-4">Pending Spending Requests</h2>
      <div className="space-y-3">
        {pending.map((req) => (
          <div
            key={req.id}
            className="p-3 rounded-lg border border-gray-500 bg-gray-900 flex justify-between items-center"
          >
            <div>
              <p className="text-gray-200 text-sm font-semibold">
                {req.club} - {req.purpose}
              </p>
              <p className="text-gray-400 text-xs">Amount: {req.amount} ETH</p>
              {ethToInr && (
                <p className="text-green-400 text-xs">
                  ₹ {(req.amount * ethToInr).toLocaleString("en-IN")}
                </p>
              )}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleAction(req.id, "approved")}
                className="px-3 py-1 bg-green-500 text-white text-xs rounded"
              >
                Approve
              </button>
              <button
                onClick={() => handleAction(req.id, "rejected")}
                className="px-3 py-1 bg-red-500 text-white text-xs rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
        {pending.length === 0 && <p className="text-gray-500">No pending requests 🎉</p>}
      </div>
    </div>
  );
};

const DeanAnnouncement = () => {
  const router = useRouter();

  const sendAnnouncement = () => {
    localStorage.setItem("announcement", "📢 Dean Sir sent you a message!");
    router.push("/Clubfaculty");
  };

  return (
    <div className="bg-black border border-gray-600 p-4 rounded-2xl shadow-lg w-full max-w-2xl mx-auto flex flex-col items-center">
      <h2 className="text-xl text-white font-bold mb-4">Dean's Announcement</h2>
      <button
        onClick={sendAnnouncement}
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg"
      >
        Send Announcement
      </button>
    </div>
  );
};

const Page = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 px-6 max-w-5xl w-full mx-auto flex flex-col space-y-8 pt-[100px]">
        <Placard02 />
        <ClubWalletSummary />
        <SpendingApprovals />
        <DeanAnnouncement />
      </div>
    </div>
  );
};

export default Page;
