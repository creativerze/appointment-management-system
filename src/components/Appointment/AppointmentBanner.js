import { format } from 'date-fns/esm';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import img from '../../assets/Appointment.jpg';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className='my-6'>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
          <div className='mr-6'>
            <DayPicker
              mode='single'
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;