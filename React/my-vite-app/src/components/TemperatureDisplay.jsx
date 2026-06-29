import React, { useState } from "react";

function TemperatureDisplay({temp}) {
  const farenheit = (temp * 9) / 5 + 32;
  return (
    <div>
      <p>Temperature In Celsius: {temp} °C</p>
      <p>Temperature In Farenheit: {farenheit} °F</p>
    </div>
  );
}

export default TemperatureDisplay;
