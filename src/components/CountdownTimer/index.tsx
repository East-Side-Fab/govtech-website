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
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

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

  // Use shorter labels for small screens
  const getDayLabel = () =>
    windowWidth <= 380 ? "D" : windowWidth <= 576 ? "DAYS" : "DAYS";
  const getHourLabel = () =>
    windowWidth <= 380 ? "H" : windowWidth <= 576 ? "HRS" : "HRS";
  const getMinLabel = () => (windowWidth <= 380 ? "M" : "MIN");
  const getSecLabel = () => (windowWidth <= 380 ? "S" : "SEC");

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.timeUnit}>
        <div className={styles.timeValue}>{timeLeft.days}</div>
        <div className={styles.timeLabel}>{getDayLabel()}</div>
      </div>
      <div className={styles.timeSeparator}>:</div>
      <div className={styles.timeUnit}>
        <div className={styles.timeValue}>
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <div className={styles.timeLabel}>{getHourLabel()}</div>
      </div>
      <div className={styles.timeSeparator}>:</div>
      <div className={styles.timeUnit}>
        <div className={styles.timeValue}>
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <div className={styles.timeLabel}>{getMinLabel()}</div>
      </div>
      <div className={styles.timeSeparator}>:</div>
      <div className={styles.timeUnit}>
        <div className={styles.timeValue}>
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <div className={styles.timeLabel}>{getSecLabel()}</div>
      </div>
    </div>
  );
}
