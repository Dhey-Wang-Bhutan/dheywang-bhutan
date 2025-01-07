"use client";
import { useState } from "react";
import dayjs from "dayjs";
import HeroHeader from "@/app/common/heroheader";

export default function EventList() {
  const today = dayjs();
  const [currentMonth, setCurrentMonth] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today.format("YYYY-MM-DD"));

  // Sample Events
  const events = [
    {
      date: "2025-01-10",
      title: "Christmas Market",
      description: "Explore the local Christmas market.",
    },
    {
      date: "2025-01-15",
      title: "Charity Run",
      description: "Join the charity run to support local causes.",
    },
    {
      date: "2025-01-25",
      title: "Christmas Celebration",
      description: "Celebrate Christmas with us!",
    },
  ];

  const daysInMonth = currentMonth.daysInMonth();
  const firstDayOfMonth = currentMonth.startOf("month").day(); // 0 (Sunday) - 6 (Saturday)

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handlePrevMonth = () =>
    setCurrentMonth(currentMonth.subtract(1, "month"));
  const handleNextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));

  return (
    <div>
      <HeroHeader
        title="Bhutan Festivals"
        button_name={"contact us"}
        img_url="/landing/bali.jpg"
        bg_color={"#f3f4f6"}
        height="60vh"
      />
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={handlePrevMonth}
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
              >
                &lt; Prev
              </button>
              <h2 className="text-2xl font-bold text-indigo-700">
                {currentMonth.format("MMMM YYYY")}
              </h2>
              <button
                onClick={handleNextMonth}
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
              >
                Next &gt;
              </button>
            </div>

            {/* Weekday Labels */}
            <div className="grid grid-cols-7 gap-1 text-center font-semibold text-gray-700">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="p-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {/* Empty Slots for Leading Days */}
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={index} className="p-4 bg-gray-100"></div>
              ))}

              {/* Days of the Month */}
              {days.map((day) => {
                const date = currentMonth.date(day).format("YYYY-MM-DD");
                const hasEvent = events.some((event) => event.date === date);
                const isSelected = selectedDate === date;

                return (
                  <div
                    key={day}
                    onClick={() => setSelectedDate(date)}
                    className={`cursor-pointer rounded-lg p-4 ${
                      hasEvent ? "bg-indigo-100" : "bg-gray-50"
                    } ${isSelected ? "ring-2 ring-indigo-500" : ""}
          hover:bg-indigo-200 transition-all duration-200`}
                  >
                    <span
                      className={`block font-medium ${
                        hasEvent ? "text-indigo-700" : "text-gray-700"
                      }`}
                    >
                      {day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Event List Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Events on {dayjs(selectedDate).format("MMMM DD, YYYY")}
            </h3>
            <div className="space-y-4">
              {events
                .filter((event) => event.date === selectedDate)
                .map((event, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg p-4 bg-gray-50"
                  >
                    <h4 className="text-lg font-semibold text-indigo-700">
                      {event.title}
                    </h4>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                ))}
              {!events.some((event) => event.date === selectedDate) && (
                <p className="text-gray-600">
                  No events scheduled for this day.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
