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
      setTextLength(ref.current.textContent?.length || 0);
    }
  }, [text]);

  return (
    <h1
      ref={ref}
      className={`inline-block typewriter-animated ${className}`}
      style={{
        animation: `typing ${typingDuration}s steps(${textLength}, end) forwards, blinkCaret 0.75s step-end infinite`,
        width: `${textLength}ch`,
        borderRightColor: cursorColor,
      }}
    >
      {text}
    </h1>
  );
}
