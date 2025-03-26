export default function ClubRecruitmentUpdates() {
    return (
      <div className="mb-32 pl-8 pt-24 py-16">
        <h2 className="text-5xl font-bold text-gray-400 mb-8">
          Club Recruitment Updates
        </h2>
  
        <div className="flex items-center gap-2 text-gray-500 mb-16 hover:text-gray-400 cursor-pointer transition-colors">
          <span>Know more about recruitment process</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
  
        <div className="space-y-8">
          {/* AWS Cloud Clubs Card */}
          <div className="border-2 border-gray-800 rounded-lg p-8 bg-black/50">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-400 mb-4">
                  AWS Cloud Clubs
                </h3>
                <p className="text-gray-500">Tentative Dates : 15-18 June 2025</p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <button className="px-6 py-2 rounded-full border border-green-500 text-green-500 hover:bg-green-500/10 transition-colors">
                  Apply in advance
                </button>
              </div>
            </div>
          </div>
  
          {/* Media Club Card */}
          <div className="border-2 border-gray-800 rounded-lg p-8 bg-black/50">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-400 mb-4">
                  Media Club
                </h3>
                <p className="text-gray-500">Tentative Dates : 22-24 June 2025</p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <button className="px-6 py-2 rounded-full border border-green-500 text-green-500 hover:bg-green-500/10 transition-colors">
                  Apply in advance
                </button>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-12 h-6 bg-gray-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500/30"></div>
                  </div>
                  <span className="text-gray-500">
                    Notify me once recruitment starts
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  