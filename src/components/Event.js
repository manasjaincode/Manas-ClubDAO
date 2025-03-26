import React, { useState, useEffect } from 'react';

function Events() {
  const [showModal, setShowModal] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="container mx-auto px-4 pt-32">
      <h2
        className={`text-5xl font-bold text-gray-400 mb-16 transition-opacity transition-transform duration-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        Upcoming Events-
      </h2>

      <div className="space-y-12">

        {/* Event 1 */}
        <div
          className={`border-2 border-gray-800 rounded-lg p-8 bg-black/50 transition-opacity transition-transform duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-400 mb-2"> &lt;/&gt; MoonHack 2025</h3>
              <p className="text-xl text-gray-500 mb-4">A 24-hour National Level Hackathon</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500">Date : 22 March 2025</p>
              <p className="text-yellow-500">⚠ Registrations Closed</p>
              <p className="text-gray-500">Venue : Medicaps University Indore</p>
              <p className="text-gray-500">Organised by Techno Clubs</p>
            </div>
          </div>
        </div>

        {/* Event 2 */}
        <div
          className={`border-2 border-gray-800 rounded-lg p-8 bg-black/50 transition-opacity transition-transform duration-700 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-400 mb-2">Melange 2025</h3>
              <p className="text-xl text-gray-500 mb-4">
                Indore&apos;s Biggest Fashion show organized during Moonstone Fest
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-500">Date : 28 March 2025</p>
              <p className="text-gray-500">Venue : Medicaps University Indore</p>
              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-2 rounded-full border border-green-500 text-green-500 hover:bg-green-500/10 transition-transform duration-300 hover:scale-105"
              >
                Apply for Participation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-black p-8 rounded-lg border border-gray-700 w-96 text-center transition-opacity transition-transform duration-300 ease-out opacity-100 scale-100"
          >
            <h2 className="text-3xl font-bold text-gray-400 mb-6">Login</h2>
            <p className="text-gray-500 mb-4">Use your University Email ID to continue</p>
            <input
              type="email"
              placeholder="University Email ID"
              className="w-full p-3 mb-4 rounded-lg border border-gray-700 bg-black text-gray-300 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-6 rounded-lg border border-gray-700 bg-black text-gray-300 focus:outline-none"
            />
            <button className="w-full px-6 py-2 rounded-lg bg-green-500 text-black font-bold hover:bg-green-400 transition-colors">
              Login
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-gray-500 hover:text-gray-300 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Events;
