import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link"; // For routing

// Dummy user data
const users = [
    
    
  { email: "Executive@medicaps", password: "1234", role: "Executive", redirect: "/Executive" },
  { email: "ClubHead@medicaps", password: "1234", role: "Club Head", redirect: "/Clubhead" },
  { email: "Dean@medicaps", password: "1234", role: "Dean's Office", redirect: "/Dean" },
  { email: "ClubFaculty@medicaps", password: "1234", role: "Club Faculty", redirect: "/Clubfaculty" },

];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl flex justify-between items-center px-6 py-3 transition-all duration-300 border-2 border-gray-500 rounded-[20px] shadow-lg z-50 ${
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

      <Link href="/" className="px-5 py-2 text-white border border-green-400 rounded-full hover:bg-green-500 hover:text-black transition duration-300">
        Home
      </Link>
    </nav>
  );
};

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (user && user.password === password) {
      router.push(user.redirect);
    } else {
      setError("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-300">
      <Navbar />

      <div className="flex justify-center items-center flex-grow w-full px-4 pt-24">
        <div className="w-full max-w-4xl space-y-6">
          {/* 🔥 Credentials Section */}
          <div className="bg-black/60 border border-green-500 rounded-xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-green-400 mb-4 text-center">
              🔑 Hackathon Judges: Use These Credentials to Test All Roles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {users.map((user, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-gray-700 rounded-lg bg-black/30 hover:bg-black/50 transition"
                >
                  <p className="font-semibold text-green-300">{user.role}</p>
                  <p>
                    <span className="text-gray-400">Username:</span>{" "}
                    <span className="text-white">{user.email}</span>
                  </p>
                  <p>
                    <span className="text-gray-400">Password:</span>{" "}
                    <span className="text-white">{user.password}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Login Form Section */}
          <div className="bg-black/50 border border-gray-800 p-8 rounded-2xl shadow-2xl max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mb-4 animate-pulse">
              Login to Club DAO Portal
            </h2>

            <form className="space-y-4" onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Enter Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-black/30 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md"
              />

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-black/30 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md"
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="w-full p-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-600 transition shadow-lg"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
