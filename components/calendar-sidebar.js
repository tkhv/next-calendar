import Combobox from "../components/ui/combobox";
import { Calendar as SideCalendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CalendarSidebar({ setEvents, setDate, date }) {
  let events = [
    {
      title: "job 1",
      start: "2024-06-14",
      jobPackageID: 1,
      jobPackageName: "test package 1",
    },
    {
      title: "job 2",
      start: "2024-06-21",
      end: "2024-06-24",
      jobPackageID: 2,
      jobPackageName: "test package 2",
    },
    {
      title: "job 3",
      start: "2024-06-10T12:30:00",
      end: "2024-06-10T16:30:00",
      // allDay: false,
      jobPackageID: 2,
      jobPackageName: "test package 2",
    },
  ];

  const jobPackages = [
    {
      id: 1,
      name: "test package 1",
    },
    {
      id: 2,
      name: "test package 2",
    },
    {
      id: 3,
      name: "test package 3",
    },
    {
      id: 4,
      name: "test package 4",
    },
    {
      id: 5,
      name: "test package 5",
    },
  ];

  const workspaces = [
    {
      id: 1,
      name: "ws 1",
    },
    {
      id: 2,
      name: "ws 2",
    },
    {
      id: 3,
      name: "ws 3",
    },
    {
      id: 4,
      name: "ws 4",
    },
    {
      id: 5,
      name: "ws 5",
    },
  ];

  function selectEventsGroup(jobPackageID) {
    let filteredEvents = events.filter(
      (event) => event.jobPackageID === jobPackageID
    );
    setEvents(filteredEvents);
  }

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
        className="rounded-md border"
      />
      <div className="ml-4">
        <Combobox
          selectEventsGroup={selectEventsGroup}
          jobPackages={jobPackages}
          workspaces={workspaces}
        />
      </div>
    </div>
  );
}
