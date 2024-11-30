import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown() {
  const calculateTimeLeft = (): TimeLeft => {
    const christmas = new Date(new Date().getFullYear(), 11, 25); // Month is 0-indexed
    const now = new Date();
    const difference = christmas.getTime() - now.getTime();

    if (difference <= 0) {
      // If it's past Christmas, calculate for next year
      christmas.setFullYear(christmas.getFullYear() + 1);
      return calculateTimeLeft();
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}
