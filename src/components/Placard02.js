import Image from "next/image";

const Placard = () => {
  return (
    <div className="w-full bg-[#1E1E1E] rounded-lg p-8 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex gap-8 items-center">
      {/* Profile Image */}
      <div className="relative w-48 h-48 flex-shrink-0">
        <img
          src="/image.png"
          alt="Profile"
          className="rounded-full w-full h-full object-cover ring-4 ring-[#3AA1DD]"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between w-full">
        {/* Name + Quote */}
        <div>
          <h1 className="text-[#3AA1DD] text-4xl font-extrabold leading-tight mb-1">
            Dr. Promod S. Nair
          </h1>
          <p className="text-[#3AA1DD] text-lg italic mb-4">"Believe in Yourself."</p>
        </div>

        {/* Designation */}
        <div className="flex gap-12 text-gray-300 text-lg mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🏛️</span>
            <span>Professor and Dean</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">📌</span>
            <span>Faculty of Engineering</span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 text-lg text-gray-300">
          <span className="text-2xl">✉️</span>
          <a
            href="mailto:pramods.nair@medicaps.ac.in"
            className="text-blue-400 underline hover:text-blue-500 transition-colors"
          >
            pramods.nair@medicaps.ac.in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Placard;
