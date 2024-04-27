
import React, { useState, useEffect } from 'react';
import Currently from './CurrentlyReading';

export default function Api() {
  

  return (
    <div className="background-api">
     <div className="section-book">
      <h1>Currently Reading</h1>
      <Currently />
     </div>
      
    </div>
  );
}
