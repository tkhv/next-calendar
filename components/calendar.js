"use client";
import React, { useRef, useEffect, useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarContext } from "@/contexts/calendarContext";

export default function Calendar() {
  const { setSideCalendarDate, mainCalendarDate, filteredEvents } =
    useContext(CalendarContext);
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(mainCalendarDate);
    }
  }, [mainCalendarDate]);

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
      events={filteredEvents}
      navLinks="true"
      eventClick={(info) => {
        console.log("title: " + info.event.title);
        console.log("job package: " + info.event.jobPackageName);
      }}
      datesSet={(dateInfo) => {
        setSideCalendarDate(dateInfo.view.currentStart);
      }}
    />
  );
}
