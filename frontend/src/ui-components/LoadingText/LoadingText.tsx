import React, { useEffect, useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";

const LoadingText = () => {
  const [currentLine, setCurrentLine] = useState(1);

  const style = {
    color: "rgb(106, 231, 133)",
    fontFamily: "monospace",
    fontSize: 16,
    fontWeight: 600,
  };

  const line1 = "Welcome to PGI-8 - Quantum Control";
  const line2 = "Initializing control system...";
  const line3 = "Getting live data...";

  useEffect(() => {
    setTimeout(() => setCurrentLine(2), 4000);
    setTimeout(() => setCurrentLine(3), 8000);
  }, []);

  return (
    <div>
      <TypeWriterEffect
        startDelay={100}
        hideCursorAfterText={true}
        cursorColor="rgb(106, 231, 133)"
        text={line1}
        textStyle={style}
        typeSpeed={100}
      />
      {currentLine >= 2 && (
        <TypeWriterEffect
          hideCursorAfterText={true}
          cursorColor="rgb(106, 231, 133)"
          text={line2}
          textStyle={style}
          typeSpeed={100}
        />
      )}
      {currentLine >= 3 && (
        <TypeWriterEffect
          hideCursorAfterText={true}
          cursorColor="rgb(106, 231, 133)"
          text={line3}
          textStyle={style}
          typeSpeed={100}
        />
      )}
    </div>
  );
};

export default LoadingText;
