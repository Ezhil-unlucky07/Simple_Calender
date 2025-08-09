import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import './App.css';

const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());
  

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2  > Select a Date</h2>
      </div>
      <Calendar
        onChange={setValue}
        value={value}
        className="custom-calendar"
      />
    <p className='today-date'>Today Date : {new Date().toDateString()}</p>
    <p className='selected-date'>Selected Date : {value.toDateString()}</p>
    </div>
  );
};

export default CalendarComponent;
