import AccordionSelector from "@/components/ui/accordionSelector";

import { Calendar as SideCalendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CalendarSidebar({
  allEvents,
  setfilteredEvents,
  date,
  setDate,
  eventColors,
}) {
  return (
    <div className="space-y-6">
      <Button className="ml-4" style={{ backgroundColor: "#0070c0" }}>
        <Plus className="w-4 h-4 mr-2" />
        Create
      </Button>

      <SideCalendar
        mode="single"
        selected={date}
        onSelect={setDate}
        onChange={setDate}
        className="rounded-md border"
      />
      <div className="ml-4">
        <AccordionSelector
          eventColors={eventColors}
          allEvents={allEvents}
          setfilteredEvents={setfilteredEvents}
          setDate={setDate}
        />
      </div>
    </div>
  );
}
