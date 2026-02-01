import React, { useState } from "react";
import "../styles/Instructions.css"
import { stages } from "../utilities/stageData";

export default function Instructions({ goNext }) {
  const [activeStage, setActiveStage] = useState(0); //

  return (
    <div className="instructions-screen">
      {/* LEFT SIDE – visual / empty (gun image area) */}
      <div className="instructions-left" />

      {/* RIGHT SIDE – mission stages */}
      <div className="instructions-right">
        <h6 className="mission-prep">Roulette Revolver</h6>

        <div className="stage-list">
          {stages.map((stage, index) => (
            <button
              key={stage.id}
              className={`stage-card ${
                index === activeStage ? "active" : ""
              }`}
              onClick={() => setActiveStage(index)}
            >
              <span className="stage-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="stage-title">{stage.name}</div>
                <div className="stage-sub">hint:{stage.mechanic}</div>
                <div className="stage-obj">objectives:{stage.objective}</div>

              </div>
            </button>
          ))}
        </div>

        <button className="accept-mission" onClick={goNext}>
          ACCEPT MISSION
        </button>
      </div>
    </div>
  );
}
 