import React from "react";

const DateSection = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let fullDate = new Date().toLocaleDateString("en-us", options);
  //   let date = new Date().toLocaleTimeString("en-us", options);

  return (
    <div className="dateSection">
      <h3>{fullDate}</h3>
    </div>
  );
};

export default DateSection;
