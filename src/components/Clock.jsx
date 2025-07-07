import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-3xl font-mono text-center">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;
