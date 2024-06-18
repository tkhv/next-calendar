"use client";
import Calendar from "@/components/calendar";
import CalendarSidebar from "@/components/calendar-sidebar";

import { useState } from "react";

export default function Home() {
  const [filteredEvents, setfilteredEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  const allEvents = [
    {
      job_category: "job_package",
      job_id: 1,
      job_name: "Job Package 1",
      start: new Date(Date.now() + 1000 * 60 * 60 * 24),
      end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
    },
    {
      job_category: "job_package",
      job_id: 2,
      job_name: "Job Package 2",
      start: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
      end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 4),
    },
    {
      job_category: "job",
      job_id: 3,
      job_name: "Job 1",
      start: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5),
      end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 6),
    },
    {
      job_category: "job",
      job_id: 4,
      job_name: "Job 2",
      start: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 8),
    },
  ];

  return (
    <main>
      <div className="flex flex-col w-dvw">
        <div>
          <h1>Calendar View</h1>
        </div>
        <div className="flex flex-row" style={{ height: "95vh" }}>
          <div style={{ width: "15vw" }} className="py-16">
            <CalendarSidebar
              allEvents={allEvents}
              setfilteredEvents={setfilteredEvents}
              date={date}
              setDate={setDate}
            />
          </div>
          <div style={{ width: "80vw" }}>
            <Calendar events={filteredEvents} date={date} setDate={setDate} />
          </div>
        </div>
      </div>
    </main>
  );
}
