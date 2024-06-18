"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import React, { useRef, useEffect } from "react";

export default function Calendar({ events, date, eventColors }) {
  const calendarRef = useRef(null);

  useEffect(() => {
    console.log("calendar: " + date);
    if (calendarRef.current) {
      console.log("current: " + date);
      let calendarApi = calendarRef.current.getApi();
      calendarApi.gotoDate(date);
    }
  }, [date]);

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      height={"100%"}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "today dayGridMonth,timeGridWeek,timeGridDay",
      }}
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
