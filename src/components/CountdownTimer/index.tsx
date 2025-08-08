import React, { useState, useEffect } from "react";
import { translate } from "@docusaurus/Translate";
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
  const getDayLabel = () => {
    if (windowWidth <= 380) {
      return translate({
        id: "countdown.days.short",
        message: "D",
        description: "Days short label"
      });
    }
    return translate({
      id: "countdown.days",
      message: "DAYS",
      description: "Days label"
    });
  };
  
  const getHourLabel = () => {
    if (windowWidth <= 380) {
      return translate({
        id: "countdown.hours.short",
        message: "H",
        description: "Hours short label"
      });
    }
    return translate({
      id: "countdown.hours",
      message: "HRS",
      description: "Hours label"
    });
  };
  
  const getMinLabel = () => {
    if (windowWidth <= 380) {
      return translate({
        id: "countdown.minutes.short",
        message: "M",
        description: "Minutes short label"
      });
    }
    return translate({
      id: "countdown.minutes",
      message: "MIN",
      description: "Minutes label"
    });
  };
  
  const getSecLabel = () => {
    if (windowWidth <= 380) {
      return translate({
        id: "countdown.seconds.short",
        message: "S",
        description: "Seconds short label"
      });
    }
    return translate({
      id: "countdown.seconds",
      message: "SEC",
      description: "Seconds label"
    });
  };

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
