"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView) => {
    setView(selectedView);
  };

  return (
    <div style={{ height: "100vh" }}>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={[Views.WORK_WEEK, Views.DAY]}
        view={view}
        style={{ height: "98%" }}
        onView={handleOnChangeView}
        min={new Date(2024, 9, 12, 8, 0, 0)}
        max={new Date(2024, 9, 12, 17, 0, 0)}
      />
    </div>
  );
};

export default BigCalendar