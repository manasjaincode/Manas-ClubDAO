import Image from "next/image";

const Placard = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white p-10 flex gap-10 max-w-[1600px] mx-auto">
      {/* Left Profile Section */}
      <div className="w-[500px] bg-[#1E1E1E] rounded-2xl p-8 shadow-xl">
        <h1 className="text-[#3AA1DD] text-5xl font-bold mb-3">Dr. Latika Jindal</h1>
        <p className="text-[#3AA1DD] text-md mb-8">#Do it NOW</p>

        {/* Profile Image */}
        <div className="relative w-56 h-56 mx-auto mb-8">
          <img 
            src="/latikamam.jpg"  
            alt="Profile"
            className="rounded-full w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Skills/Title Section */}
        <div className="space-y-3 mb-8 text-lg">
          <p className="text-gray-300">Professor</p>
          <p className="text-gray-300">Computer Science and Engg</p>
        </div>

        {/* University */}
        <div className="flex items-center gap-3 mb-6 text-lg">
          <span className="text-purple-400 text-2xl">🎓</span>
          <span className="text-purple-400">Medicaps University Indore</span>
        </div>

        {/* Additional Information */}
        <div className="space-y-2 text-gray-300 text-lg">
          <p>🎖️ Club Faculty/Incharge</p>
        </div>

        {/* Edit Button */}
        <button className="mt-8 text-gray-300 flex items-center gap-3 hover:text-[#3AA1DD] transition">
          ✏️ Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Placard;
