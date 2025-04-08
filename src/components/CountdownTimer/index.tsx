import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({
  targetDate,
}: CountdownTimerProps): JSX.Element {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.timeUnit}>
        <div className={styles.timeValue}>{timeLeft.days}</div>
        <div className={styles.timeLabel}>DAYS</div>
      </div>
      <div className={styles.timeSeparator}>:</div>
      <div className={styles.timeUnit}>
        <div className={styles.timeValue}>
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <div className={styles.timeLabel}>HRS</div>
      </div>
      <div className={styles.timeSeparator}>:</div>
      <div className={styles.timeUnit}>
        <div className={styles.timeValue}>
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <div className={styles.timeLabel}>MIN</div>
      </div>
      <div className={styles.timeSeparator}>:</div>
      <div className={styles.timeUnit}>
        <div className={styles.timeValue}>
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <div className={styles.timeLabel}>SEC</div>
      </div>
    </div>
  );
}
