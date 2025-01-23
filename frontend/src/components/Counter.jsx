// src/components/Counter.jsx
import React, { useState, useEffect } from "react";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const incrementDuration = duration / end;
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < end) {
          return Math.min(prevCount + 1, end);
        } else {
          clearInterval(interval); // Stop the interval once it reaches the target value
          return end;
        }
      });
    }, incrementDuration);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [end, duration]);

  return (
    <div className="counter">
      <p className="count">
        +{count}
      </p>
    </div>
  );
};

export default Counter;