import React from 'react';
import screenshot from '../screenshot.png';

function PhoneMockup() {
  return (
    <div className="mockup">
      <div className="phone">
        <img
          src={screenshot}
          className="phone__screen"
          alt="Phantom Countdown showing a list of themed countdowns"
          width={1206}
          height={2622}
        />
      </div>
    </div>
  );
}

export default PhoneMockup;
