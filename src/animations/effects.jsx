import { useState, useEffect, useRef } from "react";

// useEffect has been implemented here because it runs after the component has been rendered and can be controlled to run only when specific values change
export const useTensionEffects = (value, type = "shake", threshold = 30) => {
  const [effectClass, setEffectClass] = useState("");
  const timeoutRef = useRef(null);

  const prevValueRef = useRef(value);

  useEffect(() => {
    if (value === null || value === undefined) return;

    const hasDecreased = value < prevValueRef.current;
    const isCritical = value <= threshold;

    prevValueRef.current = value;

    if (!isCritical || !hasDecreased) return;

    const config = {
      shake: { className: "animate-shake", duration: 500 },
      flashRed: { className: "animate-flashRed", duration: 200 },
    };

    const selectedEffect = config[type] || config.shake;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setEffectClass("");

    // the setEffect Here is used for adding visuals audio's and the effects for the animation
    requestAnimationFrame(() => {
      setEffectClass(selectedEffect.className);

      timeoutRef.current = setTimeout(() => {
        setEffectClass("");
      }, selectedEffect.duration);
    });

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [value, type, threshold]);

  return effectClass;
};
