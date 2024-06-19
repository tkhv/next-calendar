"use client";
import Calendar from "@/components/calendar";
import CalendarSidebar from "@/components/calendar-sidebar";
import { CalendarContextProvider } from "@/contexts/calendarContext";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col w-dvw">
        <div>
          <h1>Calendar View</h1>
        </div>
        <CalendarContextProvider>
          <div className="flex flex-row" style={{ height: "95vh" }}>
            <div style={{ width: "15vw" }} className="py-16">
              <CalendarSidebar />
            </div>
            <div style={{ width: "80vw" }}>
              <Calendar />
            </div>
          </div>
        </CalendarContextProvider>
      </div>
    </main>
  );
}
