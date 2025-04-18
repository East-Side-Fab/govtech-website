import React, { createElement, useEffect, useState } from "react";
import styles from "./styles.module.css";

interface GlitchTextProps {
  text: string;
  element?: keyof JSX.IntrinsicElements;
  className?: string;
}

export function GlitchText({
  text,
  element = "div",
  className = "",
}: GlitchTextProps): JSX.Element {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check screen size on mount and when window resizes
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 480);
    };

    // Initial check
    checkScreenSize();

    // Add event listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // For very small screens, reduce animation complexity by disabling one of the effects
  const renderGlitchEffects = () => {
    return (
      <>
        <span className={styles.glitchTextMain}>{text}</span>
        <span className={styles.glitchTextRed} aria-hidden="true">
          {text}
        </span>
        {/* Only render blue effect if not on very small screens to improve performance */}
        {!isSmallScreen && (
          <span className={styles.glitchTextBlue} aria-hidden="true">
            {text}
          </span>
        )}
      </>
    );
  };

  return createElement(
    element,
    { className: `${styles.glitchText} ${className}` },
    renderGlitchEffects(),
  );
}
