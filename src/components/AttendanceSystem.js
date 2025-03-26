import React, { useState, useEffect } from "react";

// Example of students' attendance data
const attendanceData = [
  {
    subject: "Agile Development",
    percentage: 68,
    missedLectures: [
      {
        eventDate: "2025-03-10",
        eventName: "Hackathon Preparation",
        startTime: "09:30", // Starting time of the missed lecture
        missedTime: 50, // Missed 1 lecture = 50 minutes
      },
      {
        eventDate: "2025-03-15",
        eventName: "Club Activity",
        startTime: "11:30", // Another missed lecture
        missedTime: 50, // Missed 1 lecture = 50 minutes
      },
    ],
  },
  {
    subject: "Machine Learning",
    percentage: 72,
    missedLectures: [
      {
        eventDate: "2025-03-12",
        eventName: "Team Meeting",
        startTime: "10:00", // Starting time of the missed lecture
        missedTime: 50, // Missed 1 lecture = 50 minutes
      },
    ],
  },
];

const formatTime = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  let ampm = "AM";
  let adjustedHours = hours;

  if (hours >= 12) {
    ampm = "PM";
    if (hours > 12) {
      adjustedHours = hours - 12;
    }
  }
  
  return `${adjustedHours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
};

const calculateEndTime = (startTime, duration) => {
  const [hours, minutes] = startTime.split(":").map(Number);
  let endMinutes = minutes + duration;
  let endHours = hours;

  if (endMinutes >= 60) {
    endMinutes -= 60;
    endHours += 1;
  }

  return formatTime(`${endHours}:${endMinutes}`);
};

const AttendanceSystem = ({ role, studentsList }) => {
  const [showRequestButton, setShowRequestButton] = useState(false);

  // Check if attendance is less than 75% for any subject
  useEffect(() => {
    const lowAttendance = attendanceData.some((subject) => subject.percentage < 75);
    setShowRequestButton(lowAttendance); // If any subject has < 75%, show the request button
  }, []);

  // Handle Request Attendance Exemption/Adjustment
  const handleRequestAdjustment = () => {
    alert("Request for Attendance Exemption/Adjustment sent to Club Faculty! 👍");
    // You can replace the alert with actual API call or functionality to notify Club Faculty
  };

  return (
    <div className="bg-slate-800 text-slate-300 p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-xl font-semibold mb-4">Attendance Status</h2>
      <div className="space-y-3">
        {attendanceData.map((data, index) => (
          <div key={index} className="space-y-4">
            <div className="flex justify-between items-center">
              <span>{data.subject}</span>
              <span
                className={`text-lg font-bold ${
                  data.percentage < 75 ? "text-red-400" : "text-green-400"
                }`}
              >
                {data.percentage}%
              </span>
            </div>

            {/* List Missed Lectures with Event Details */}
            <div className="space-y-2">
              {data.missedLectures.map((lecture, index) => {
                const endTime = calculateEndTime(lecture.startTime, lecture.missedTime);
                return (
                  <div key={index} className="flex justify-between items-center text-slate-200 text-sm">
                    <div className="space-x-2">
                      <span className="font-semibold">{lecture.eventName}</span>
                      <span>({lecture.eventDate})</span>
                    </div>
                    <span>
                      Missed: {formatTime(lecture.startTime)} - {endTime}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Show alert and button if attendance is below 75% */}
        {showRequestButton && (
          <div className="mt-4 bg-slate-600 text-slate-200 rounded-lg p-4">
            <p className="text-lg font-semibold">
              ⚠️ Your attendance is low in one or more subjects. Request exemption/adjustment.
            </p>
            <button
              onClick={handleRequestAdjustment}
              className="mt-4 px-6 py-2 bg-green-500 text-slate-800 rounded-full flex items-center space-x-2 hover:bg-green-600 transition"
            >
              <span>Request Exemption</span>
              <span>👍</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceSystem;
