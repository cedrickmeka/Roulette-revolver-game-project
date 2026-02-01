import React from "react";

export const PageTransition = ({ children, className = "" }) => {
  return (
    <div className={`animate-fadeIn w-full h-full ${className}`}>
      {children}
    </div>
  );
};

export const OverlayEffect = ({ activeClass }) => {
  if (!activeClass) return null;
  return (
    <div
      className={`absolute inset-0 z-50 pointer-events-none mix-blend-overlay transition-colors ${activeClass}`}
    />
  );
};
