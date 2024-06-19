"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarContext } from "@/contexts/calendarContext";

import { useState, useContext } from "react";

export default function AccordionSelectorItem({
  eventCategory,
  eventsList,
  checkedEvents,
  setCheckedEvents,
}) {
  const { setSideCalendarDate, setMainCalendarDate } =
    useContext(CalendarContext);
  const [checkedCount, setCheckedCount] = useState(eventsList.length);

  return (
    <AccordionItem value={eventCategory}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={checkedCount === eventsList.length}
          value="all"
          onCheckedChange={(value) => {
            let newCheckedEvents = new Set([...checkedEvents]);
            if (value) {
              for (let event of eventsList) {
                newCheckedEvents.add(event.job_id);
              }
              setCheckedCount(eventsList.length);
              setCheckedEvents(newCheckedEvents);
            } else {
              for (let event of eventsList) {
                newCheckedEvents.delete(event.job_id);
              }
              setCheckedCount(0);
              setCheckedEvents(newCheckedEvents);
            }
          }}
          style={{ marginRight: "1rem" }}
        />
        <AccordionTrigger>{eventCategory}</AccordionTrigger>
      </div>
      <AccordionContent>
        <Command className="p-0 m-0">
          <CommandInput placeholder="Search..." />
          <CommandList>
            <ScrollArea className="h-44 w-auto">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {eventsList.map((event) => (
                  <CommandItem key={event.job_id}>
                    <Checkbox
                      checked={checkedEvents.has(event.job_id)}
                      onCheckedChange={(value) => {
                        let newCheckedEvents = new Set([...checkedEvents]);
                        if (value) {
                          newCheckedEvents.add(event.job_id);
                          setCheckedCount(checkedCount + 1);
                        } else {
                          newCheckedEvents.delete(event.job_id);
                          setCheckedCount(checkedCount - 1);
                        }
                        setCheckedEvents(newCheckedEvents);
                      }}
                      value={event.job_id}
                      style={{ marginRight: "1rem" }}
                    />
                    <button
                      onClick={() => {
                        setSideCalendarDate(event.start);
                        setMainCalendarDate(event.start);
                      }}
                    >
                      {event.job_name}
                    </button>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </ScrollArea>
          </CommandList>
        </Command>
      </AccordionContent>
    </AccordionItem>
  );
}
