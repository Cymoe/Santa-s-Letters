import { useState, useEffect } from 'react';

export function useWatchers(packageType: string) {
  const [watchers, setWatchers] = useState(0);

  useEffect(() => {
    // Initial random number of watchers (between 3 and 15)
    const initialWatchers = Math.floor(Math.random() * 13) + 3;
    setWatchers(initialWatchers);

    // Update watchers every 20-40 seconds
    const interval = setInterval(() => {
      setWatchers(current => {
        // 70% chance to increase, 30% chance to decrease
        const shouldIncrease = Math.random() < 0.7;
        // Change by 1-2 watchers
        const change = Math.floor(Math.random() * 2) + 1;
        
        const newValue = shouldIncrease ? current + change : current - change;
        // Keep watchers between 2 and 20
        return Math.min(Math.max(newValue, 2), 20);
      });
    }, Math.floor(Math.random() * 20000) + 20000); // Random interval between 20-40 seconds

    return () => clearInterval(interval);
  }, [packageType]);

  return watchers;
}
