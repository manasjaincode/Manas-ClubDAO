// pages/club-repository.js
import { useState } from "react";
import Image from "next/image";

const goodies = [
  { id: 1, name: "DAO Hoodie", credits: 465, image: "/Hoodie.jpeg" },
  { id: 2, name: "VIP-Event tickets", credits: 440, image: "/Tedx.jpg" },
  { id: 3, name: "Diary", credits: 480, image: "/Merchandise.jpeg" },
  { id: 4, name: "T-shirt", credits: 610, image: "/Tshirt.jpeg" },
  { id: 5, name: "DAO Cap", credits: 460, image: "/Cap.jpeg" },
];

export default function ClubRepositoryPage() {
  const [rewardPoints] = useState(425); // Still static

  const handleRedeem = (item) => {
    alert("🚫 Sorry, you don't have enough coins.");
  };

  return (
    <div className="bg-gradient-to-br from-black to-gray-900 min-h-screen p-10">
      <h1 className="text-5xl text-white font-extrabold text-center mb-8 tracking-wide">🪙 Club Repository</h1>
      <div className="text-center text-xl text-green-400 mb-10">Reward Points: {rewardPoints}</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {goodies.map((item) => (
          <div
            key={item.id}
            className="bg-[#121826] p-6 rounded-2xl border border-gray-700 hover:scale-105 transition-transform relative shadow-2xl"
          >
            <div className="relative h-48 w-full mb-4">
              <Image 
                src={item.image} 
                alt={item.name} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-xl"
                priority
              />
            </div>
            <h2 className="text-white text-2xl font-semibold">{item.name}</h2>
            <p className="text-gray-400 mb-4">Credits: {item.credits}</p>
            <button
              onClick={() => handleRedeem(item)}
              className="w-full py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
            >
              Redeem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
