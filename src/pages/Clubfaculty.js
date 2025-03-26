import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Placard03 from "@/components/Placard03";
import FPerformanceGraph from "@/components/FPerformanceGraph";
import GenerateReport from "@/components/Report";
import ConflictResolution from "@/components/ConflictResolution";
import BudgetApproval from "@/components/BudgetApproval";
import Announcement from "@/components/Announcement";
import { motion } from "framer-motion";

// Navbar component
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
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl flex justify-between items-center px-6 py-3 transition-all duration-300 border-2 border-gray-500 rounded-[20px] z-50 ${
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

// Faculty Actions component (moved back inside)
const FacultyActions = () => {
  const [students, setStudents] = useState([]);
  const [isListGenerated, setIsListGenerated] = useState(false);

  const generateList = () => {
    const studentsData = [
      { name: "Mehak", score: 58 },
      { name: "Manya", score: 62 },
      { name: "Manas", score: 59 },
    ];

    const studentsBelow60 = studentsData.filter((student) => student.score < 60);
    setStudents(studentsBelow60);
    setIsListGenerated(true);
  };

  const sendToDean = () => {
    alert("List of students sent to the Dean!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-gray-300 p-6 rounded-lg shadow-lg w-full"
    >
      <h2 className="text-2xl font-semibold mb-4">Faculty Actions</h2>
      <button
        onClick={generateList}
        className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition mb-4 w-full"
      >
        Generate Student List
      </button>

      {isListGenerated && students.length > 0 && (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">High Alert Students (Below 60)</h3>
          <ul>
            {students.map((student, index) => (
              <li key={index} className="mb-2">
                {student.name} - {student.score}
              </li>
            ))}
          </ul>
          <button
            onClick={sendToDean}
            className="px-4 py-2 text-white bg-green-600 rounded-full hover:bg-green-700 transition mt-4 w-full"
          >
            Send List to Dean
          </button>
        </div>
      )}
    </motion.div>
  );
};

const Page = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const announcement = localStorage.getItem("announcement");
    if (announcement) {
      setMessage(announcement);
      localStorage.removeItem("announcement");
    }
  }, []);

  return (
    <div className="bg-black min-h-screen pb-4 relative">
      <Navbar />
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 pt-[120px] md:pt-[140px] px-4">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="col-span-12 md:col-span-7 space-y-6"
        >
          <Placard03 />
        </motion.div>

        {/* Right Column */}
        <div className="col-span-12 md:col-span-5 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <FPerformanceGraph />
            <FacultyActions />
            <ConflictResolution />
            <GenerateReport />
            <BudgetApproval />
          </motion.div>
        </div>
      </div>

      {/* Announcement Modal */}
      {message && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
          <Announcement message={message} resetMessage={() => setMessage("")} />
        </div>
      )}
    </div>
  );
};

export default Page;
