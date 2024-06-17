"use client";
import Calendar from "@/components/calendar";
import CalendarSidebar from "@/components/calendar-sidebar";

import { useState } from "react";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  return (
    <main>
      <div className="flex flex-col w-dvw">
        <div>
          <h1>Calendar View</h1>
        </div>
        <div className="flex flex-row" style={{ height: "95vh" }}>
          <div style={{ width: "15vw" }} className="py-16">
            <CalendarSidebar setEvents={setEvents} />
          </div>
          <div style={{ width: "80vw" }}>
            <Calendar events={events} />
          </div>
        </div>
      </div>
    </main>
  );
}

// style={{ backgroundColor: "red" }}
