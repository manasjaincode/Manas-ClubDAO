import Image from "next/image";

const Placard = ({ rewardPoints }) => {
  return (
    <div className="min-h-screen bg-[#000000] text-white p-6 flex gap-6">
      {/* Left Profile Section */}
      <div className="w-[400px] bg-[#1E1E1E] rounded-lg p-6">
        <h1 className="text-[#3AA1DD] text-4xl font-bold mb-2">Manas Jain</h1>
        <p className="text-[#3AA1DD] text-sm mb-6">COFFEE | CODE | REPEAT</p>

        {/* Profile Image */}
        <div className="relative w-48 h-48 mx-auto mb-6">
          <img 
            src="/manas.jpg"  
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        {/* Skills Section */}
        <div className="space-y-2 mb-6">
          <p className="text-gray-300">🗣️ Public Speaking | 💻 React/Next JS</p>
          <p className="text-gray-300">🚀 Development (Level 3) | 🔢 DSA (Level 2)</p>
        </div>

        {/* University */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-purple-400 text-xl">🎓</span>
          <span className="text-purple-400">Medicaps University Indore</span>
        </div>

        {/* Additional Information */}
        <div className="space-y-2 text-gray-300">
          <p>🏛️ Club Name : Science Club</p>
          <p>📌 Position : Management Head</p>

          {/* Reward Points Section */}
          <div className="flex items-center gap-2">
            <Image
              src="/bluestrike.png"
              alt="Reward Icon"
              width={30}
              height={30}
              className="object-contain"
            />
            <span className="text-green-400 font-semibold">
              Reward Points - {rewardPoints}
            </span>
          </div>

          <p>📅 Member since : 15th June 2024</p>
        </div>

        {/* Edit Button */}
        <button className="mt-6 text-gray-300 flex items-center gap-2">
          ✏️ Edit
        </button>
      </div>
    </div>
  );
};

export default Placard;
