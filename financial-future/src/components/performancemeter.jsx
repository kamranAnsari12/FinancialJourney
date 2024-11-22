import React from "react";

const PerformanceMeter = ({ score }) => {
  // Determine the label and color based on the score
  const getPerformanceDetails = (score) => {
    if (score > 20) return { label: "Good", color: "#008000" }; // Green
    if (score > 15) return { label: "Upper Moderate", color: "#FFA500" }; // Orange
    if (score > 10) return { label: "Lower Moderate", color: "#FFFF00" }; // Yellow
    return { label: "Bad", color: "#FF0000" }; // Red
  };

  const performance = getPerformanceDetails(score);

  // Map the score to an angle (0-180 degrees)
  // 50, 90, 130,180, 
  // score > 20 : : um, 10-15: lm, 10 < bad
  let needleAngle = 0
  if(score > 20) needleAngle = 155
  else if(score <= 20 && score > 15) needleAngle = 110
  else if(score <= 15 && score > 10) needleAngle = 75
  else if (score <= 10) needleAngle = 25
  

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Performance Meter</h2>
      <div style={{ position: "relative", width: "300px", height: "150px" }}>
        {/* SVG Arc */}
        <svg viewBox="0 0 100 50" style={{ width: "100%", height: "100%" }}>
          {/* Red Section */}
          <path d="M5 50 A40 40 0 0 1 25 20" fill="none" stroke="#FF0000" strokeWidth="8" />
          {/* Yellow Section */}
          <path d="M25 20 A40 40 0 0 1 50 13" fill="none" stroke="#FFFF00" strokeWidth="8" />
          {/* Orange Section */}
          <path d="M50 13 A40 40 0 0 1 75 20" fill="none" stroke="#FFA500" strokeWidth="8" />
          {/* Green Section */}
          <path d="M75 20 A40 40 0 0 1 95 50" fill="none" stroke="#008000" strokeWidth="8" />
        </svg>

        {/* Needle */}
        <div
          style={{
            position: "absolute",
            width: "2px",
            height: "90px",
            backgroundColor: "black",
            top: "100%",
            left: "50%",
            transformOrigin: "bottom center",
            transform: `translate(-50%, -100%) rotate(${needleAngle - 90}deg)`,
          }}
        ></div>

        {/* Labels */}
        <div
          style={{
            position: "absolute",
            top: "75%",
            left: "-8%",
            color: " #000000",
            fontSize: "15px",
          }}
        >
          Bad
        </div>
        <div
          style={{
            position: "absolute",
            top: "1%",
            left: "8%",
            color: "#000000",
            fontSize: "15px",
          }}
        >
          Lower Moderate
        </div>
        <div
          style={{
            position: "absolute",
            top: "1%",
            right: "2%",
            color: " #000000",
            fontSize: "15px",
          }}
        >
          Upper Moderate
        </div>
        <div
          style={{
            position: "absolute",
            top: "75%",
            right: "-12%",
            color: "#000000",
            fontSize: "15px",
          }}
        >
          Good
        </div>
      </div>

      {/* Performance Label */}
      <p style={{ fontSize: "20px", color: performance.color }}>
        {performance.label} ({score})
      </p>
    </div>
  );
};

export default PerformanceMeter;
