"use client";

import AccordionSelectorItem from "./accordionSelectorItem";
import { Accordion } from "@/components/ui/accordion";

import { useState, useEffect } from "react";

export default function AccordionSelector({
  allEvents,
  setfilteredEvents,
  eventColors,
}) {
  let jobPackages = [];
  let jobs = [];
  let workflows = [];

  const [checkedEvents, setCheckedEvents] = useState(new Set());

  for (let event of allEvents) {
    event["color"] = eventColors[event.job_category];
    event["title"] = event.job_name;
    switch (event.job_category) {
      case "job":
        jobs.push(event);
        break;
      case "job_package":
        jobPackages.push(event);
        break;
      case "workflow":
        workflows.push(event);
        break;
    }
  }

  useEffect(() => {
    let newCheckedEvents = new Set();
    for (let event of allEvents) {
      newCheckedEvents.add(event.job_id);
    }
    setCheckedEvents(newCheckedEvents);
  }, []);

  useEffect(() => {
    const filteredEvents = allEvents.filter((event) =>
      checkedEvents.has(event.job_id)
    );
    setfilteredEvents(filteredEvents);
  }, [checkedEvents]);

  return (
    <Accordion type="single" collapsible>
      <AccordionSelectorItem
        eventCategory="Job Packages"
        eventsList={jobPackages}
        checkedEvents={checkedEvents}
        setCheckedEvents={setCheckedEvents}
      />
      <AccordionSelectorItem
        eventCategory="Jobs"
        eventsList={jobs}
        checkedEvents={checkedEvents}
        setCheckedEvents={setCheckedEvents}
      />
      <AccordionSelectorItem
        eventCategory="Workflows"
        eventsList={workflows}
        checkedEvents={checkedEvents}
        setCheckedEvents={setCheckedEvents}
      />
    </Accordion>
  );
}
