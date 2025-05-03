import React from "react";

const DarkModeButton = ({ onClick, checked, className }) => {
  return (
    <button onClick={onClick} className={className}>
      <span>{checked ? "🌔" : "🌒"}</span>
    </button>
  );
};

export default DarkModeButton;
