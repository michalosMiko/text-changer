import React, { useState, useEffect } from "react";
import "./Textwriter.css"

const TextWriter = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((currentIndex) => (currentIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [texts]);
// text se vkládá do pole do zobrazované komponenty, zde App.js
  return (
    <div className="text-change">
      <div className="change-h1"><h1>{texts[currentTextIndex]}</h1></div>
      <div className="change-h2"><h2>{texts[(currentTextIndex + 1) % texts.length]}</h2></div>
      <div className="change-h3"><h3>{texts[(currentTextIndex + 2) % texts.length]}</h3></div>
      <div className="change-h4"><h4>{texts[(currentTextIndex + 3) % texts.length]}</h4></div>
    </div>
  );
};

export default TextWriter;
