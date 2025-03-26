import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Placard04 from "@/components/Placard04";
import TaskManager from "@/components/TaskManager";
import ResourceList from "@/components/ResourceInventory";
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
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl flex justify-between items-center px-6 py-3 transition-all duration-300 border-2 border-gray-500 rounded-b-[20px] rounded-t-[0px] ${
        isScrolled ? "bg-black/40 backdrop-blur-md" : "bg-black"
      } z-50`}
      style={{ top: 0 }}
    >
      <div className="flex items-center space-x-3">
        {/* Logo */}
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

const Page = () => {
  return (
    <div className="bg-black min-h-screen relative">
      <Navbar />
      <div className="pt-28 flex justify-center">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-[95%]">
          {/* Left Side - Placard + Executive Insights */}
          <div className="flex-1 space-y-6">
            <Placard04 />
            <div className="w-[90%] mx-auto">
              <ExecutiveInsights />
            </div>
          </div>

          {/* Right Side - TaskManager + Resource List */}
          <div className="w-full md:w-[380px] space-y-6">
            <div className="w-full">
              <TaskManager />
            </div>
            <div className="w-full">
              <ResourceList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
