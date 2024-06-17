"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar({ events }) {
  return (
    <FullCalendar
      themeSystem="bootstrap5"
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      height={"100%"}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "today dayGridMonth,timeGridWeek,timeGridDay",
      }}
      eventColor="#1d4ed8"
      events={events}
      // selectable="true"
      navLinks="true"
      eventClick={(info) => {
        console.log("title: " + info.event.title);
        console.log("job package: " + info.event.jobPackageName);
      }}
    />
  );
}
