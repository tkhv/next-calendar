import AccordionSelector from "@/components/ui/accordionSelector";
import { Calendar as SideCalendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { CalendarContext } from "@/contexts/calendarContext";

import { useContext } from "react";

export default function CalendarSidebar({ allEvents, eventColors }) {
  const { sideCalendarDate, setMainCalendarDate, setSideCalendarDate } =
    useContext(CalendarContext);

  return (
    <div className="space-y-6">
      <Button className="ml-4" style={{ backgroundColor: "#0070c0" }}>
        <Plus className="w-4 h-4 mr-2" />
        Create
      </Button>

      <SideCalendar
        mode="single"
        className="rounded-md border"
        onSelect={(date) => {
          setMainCalendarDate(date);
        }}
      />
      <div className="ml-4">
        <AccordionSelector eventColors={eventColors} allEvents={allEvents} />
      </div>
    </div>
  );
}
