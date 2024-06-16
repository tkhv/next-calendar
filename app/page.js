import Calendar from "@/components/calendar";
import CalendarSidebar from "@/components/calendar-sidebar";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col w-dvw">
        <div>
          <h1>Calendar</h1>
        </div>
        <div className="flex flex-row" style={{ height: "95vh" }}>
          <div style={{ width: "15vw" }}>
            <CalendarSidebar />
          </div>
          <div style={{ width: "80vw" }}>
            <Calendar />
          </div>
        </div>
      </div>
    </main>
  );
}

// style={{ backgroundColor: "red" }}
