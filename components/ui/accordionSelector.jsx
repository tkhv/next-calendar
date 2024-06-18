"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

import { useState, useEffect } from "react";

export default function AccordionSelector({ allEvents, setfilteredEvents }) {
  let jobPackages = [];
  let jobs = [];
  let workflows = [];

  const [checkedItems, setCheckedItems] = useState({});

  for (let event of allEvents) {
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
    let initialCheckedItems = {};
    allEvents.forEach((event) => {
      initialCheckedItems[event.job_id] = true;
    });
    setCheckedItems(initialCheckedItems);
    setfilteredEvents(allEvents);
  }, []);

  const handleCheckChange = (jobId, isChecked) => {
    setCheckedItems((prevState) => ({ ...prevState, [jobId]: isChecked }));
    if (isChecked) {
      setfilteredEvents((prevEvents) => [
        ...prevEvents,
        allEvents.find((event) => event.job_id === jobId),
      ]);
    } else {
      setfilteredEvents((prevEvents) =>
        prevEvents.filter((event) => event.job_id !== jobId)
      );
    }
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="job_packages">
        <AccordionTrigger>Job Packages</AccordionTrigger>
        {jobPackages.map((jobPackage) => (
          <AccordionContent key={jobPackage.job_id}>
            <Checkbox
              checked={checkedItems[jobPackage.job_id]}
              onCheckedChange={(value) => {
                handleCheckChange(jobPackage.job_id, value);
              }}
              value={jobPackage.job_id}
              style={{ marginRight: "1rem" }}
            />
            {jobPackage.job_name}
          </AccordionContent>
        ))}
      </AccordionItem>

      <AccordionItem value="jobs">
        <AccordionTrigger>Jobs</AccordionTrigger>
        {jobs.map((job) => (
          <AccordionContent key={job.job_id}>
            <Checkbox
              checked={checkedItems[job.job_id]}
              onCheckedChange={(value) => {
                handleCheckChange(job.job_id, value);
              }}
              value={job.job_id}
              style={{ marginRight: "1rem" }}
            />
            {job.job_name}
          </AccordionContent>
        ))}
      </AccordionItem>
      <AccordionItem value="workflows">
        <AccordionTrigger>Workflows</AccordionTrigger>
        {workflows.map((workflow) => (
          <AccordionContent key={workflow.id}>
            <Checkbox
              checked={checkedItems[workflow.job_id]}
              onCheckedChange={(value) => {
                handleCheckChange(workflow.job_id, value);
              }}
              value={workflow.id}
              style={{ marginRight: "1rem" }}
            />
            {workflow.name}
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
}
