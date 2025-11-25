"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  className?: string;
  typingDuration?: number;
  cursorColor?: string;
}

export default function Typewriter({
  text,
  className = "",
  typingDuration = 3,
  cursorColor = "var(--dossier-title)",
}: TypewriterProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [textLength, setTextLength] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setTextLength(text.length);
    }
  }, [text]);

  return (
    <h1
      ref={ref}
      className={`inline-block typewriter-animated ${className}`}
      style={{
        animation: `typing ${typingDuration}s steps(${textLength}, end) forwards, hideCaret 0.1s ${typingDuration}s forwards`,
        width: `${textLength}ch`,
        borderRightColor: cursorColor,
        ["--final-width" as any]: `${textLength}ch`,
      }}
    >
      {text}
    </h1>
  );
}
