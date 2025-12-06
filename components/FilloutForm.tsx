"use client";

import { useEffect } from "react";


const sectionsTracked = new Set<string>();

export default function FilloutForm() {


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);




    };
  }, []);

  return (
    
    <div
      data-fillout-id="ibaifYKbXeus"
      data-fillout-embed-type="fullscreen"
      style={{ width: "100%", height: "100%" }}
      data-fillout-inherit-parameters
    />
    
  );
}