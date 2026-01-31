import { useState, useEffect } from "react";

export const useTensionEffects = (
  triggerValue,
  type = "shake",
  threshold = 30,
) => {
  const [effectClass, setEffectClass] = useState("");

  useEffect(() => {
    if (triggerValue === null || triggerValue === undefined) return;

    if (triggerValue > threshold) return;

    let activeClass = "";
    let duration = 0;

    if (type === "shake") {
      activeClass = "animate-shake";
      duration = 500;
    } else if (type === "flashRed") {
      activeClass = "bg-red-500/20";
      duration = 200;
    }

    setEffectClass(activeClass);

    const timer = setTimeout(() => {
      setEffectClass("");
    }, duration);

    return () => clearTimeout(timer);
  }, [triggerValue, type, threshold]);

  return effectClass;
};
