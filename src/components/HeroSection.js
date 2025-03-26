"use client";

export default function HeroSection() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-[80px] font-extrabold text-gray-400 leading-none animate-slide-in-left">
            Club DAO
          </h1>
          <p className="text-2xl text-gray-500 animate-slide-in-left delay-200">
            Where student clubs run on Code, Not Chaos &lt;/&gt;
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center relative w-full h-[400px] rounded-xl border border-gray-700">
          {/* Placeholder Image */}
          <img
            src="/dao.jpg"
            alt="Placeholder"
            className="object-contain h-full"
          />
          <p className="absolute bottom-4 text-gray-500 font-medium text-lg">
            Decentralized Autonomous Organization
          </p>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </main>
  );
}
