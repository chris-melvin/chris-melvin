import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default function Hero({ children }) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          color: 0x000000,
          waveHeight: 20,
          shininess: 50,
          waveSpeed: 1.5,
          zoom: 0.75,
          backgroundColor: 0x003049,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <section className="min-h-screen" ref={myRef}>
      {children}
    </section>
  );
}
