import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Placard01 from "@/components/Placard01";
import Executivetask from "@/components/Executivetask";
import AttendanceSystem from "@/components/AttendanceSystem";
import ExecutiveInsights from "@/components/ExecutiveInsights";

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
      {/* Left Section with logo and Repo Button */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
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

        {/* Club Repository Button */}
        <button
          onClick={() => router.push("/club-repository")}
          className="ml-4 px-4 py-1.5 text-sm text-white border border-green-400 rounded-full hover:bg-green-500 transition"
        >
          📂 Club Repository
        </button>
      </div>

      {/* Right Side: Home */}
      <button
        onClick={() => router.push("/")}
        className="px-4 py-1.5 text-white border border-green-400 rounded-full hover:bg-green-500 transition"
      >
        Home
      </button>
    </nav>
  );
};

const ExecutivePage = () => {
  const [rewardPoints, setRewardPoints] = useState(425);
  const studentsList = [
    { id: 1, name: "Student 1" },
    { id: 2, name: "Student 2" },
  ];

  const addPoints = (points) => {
    setRewardPoints((prev) => prev + points);
  };

  return (
    <div className="bg-black min-h-screen relative">
      <Navbar />
      {/* Adjust padding top to match navbar height + spacing */}
      <div className="pt-36 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side */}
          <div className="lg:w-1/3">
            <Placard01 rewardPoints={rewardPoints} />
          </div>
          <ExecutiveInsights />

          {/* Right Side */}
          <div className="lg:w-2/3">
            <Executivetask addPoints={addPoints} />
          </div>
        </div>

        {/* Attendance System Component */}
        <div className="mt-8">
          <AttendanceSystem role="executive" studentsList={studentsList} />
        </div>
      </div>
    </div>
  );
};

export default ExecutivePage;
