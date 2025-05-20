import React from "react";

function SummaryItem({ imageIcon, label, score, labelColor, bgColor }) {
  return (
    <li className="summary-item" style={{ backgroundColor: bgColor }}>
      <img src={imageIcon} alt={label + "icon"} />
      <span className="summary-item__label" style={{ color: labelColor }}>
        {label}
      </span>
      <span className="summary-item__score">
        <strong>{score}&nbsp;</strong> / 100
      </span>
    </li>
  );
}

export default SummaryItem;
