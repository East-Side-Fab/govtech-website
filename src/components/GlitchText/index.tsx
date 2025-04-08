import React, { createElement } from "react";
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
  return createElement(
    element,
    { className: `${styles.glitchText} ${className}` },
    <>
      <span className={styles.glitchTextMain}>{text}</span>
      <span className={styles.glitchTextRed} aria-hidden="true">
        {text}
      </span>
      <span className={styles.glitchTextBlue} aria-hidden="true">
        {text}
      </span>
    </>,
  );
}
