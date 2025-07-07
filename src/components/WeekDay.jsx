import { getISOWeek, format } from "date-fns";
import { useState, useEffect } from "react";

const WeekDay = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const now = new Date();
  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
  // Format parts
  // const weekday = format(time, "EEEE");
  const datePart = format(time, "MMM d");
  const weekNumber = getISOWeek(time); // 26
  return (
    <div className="absolute top-8 right-8 text-right z-10">
      <p className="text-sm">Today is</p>
      <p className="text-2xl font-bold">{weekday}</p>
      <p className="text-xl">{datePart}. </p>
      <p className="text-sm opacity-70">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default WeekDay;
