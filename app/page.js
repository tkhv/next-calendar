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
    {
      job_category: "job_package",
      job_id: 5,
      job_name: "Job Package 3",
      start: new Date(Date.now() - 1000 * 60 * 60 * 24),
      end: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    },
    {
      job_category: "job_package",
      job_id: 6,
      job_name: "Job Package 4",
      start: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      end: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4),
    },
    {
      job_category: "job_package",
      job_id: 7,
      job_name: "Job Package 5",
      start: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
      end: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6),
    },
    {
      job_category: "job_package",
      job_id: 8,
      job_name: "Job Package 6",
      start: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
      end: new Date(Date.now() - 1000 * 60 * 60 * 24 * 8),
    },
    {
      job_category: "job_package",
      job_id: 9,
      job_name: "Job Package 7",
      start: new Date(Date.now() - 1000 * 60 * 60 * 24 * 9),
      end: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
    },
    {
      job_category: "job_package",
      job_id: 10,
      job_name: "Job Package 8",
      start: new Date(Date.now() - 1000 * 60 * 60 * 24 * 11),
      end: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12),
    },
    {
      job_category: "job_package",
      job_id: 11,
      job_name: "Job Package 9",
      start: new Date(Date.now() - 1000 * 60 * 60 * 24 * 13),
      end: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14),
    },
    {
      job_category: "job_package",
      job_id: 12,
      job_name: "Job Package 10",
      start: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15),
      end: new Date(Date.now() - 1000 * 60 * 60 * 24 * 16),
    },
  ];

  let defaultEventColors = {
    job_package: "datanueBlue",
    job: "datanueBlue",
    workflow: "datanueBlue",
  };

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
              eventColors={defaultEventColors}
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
