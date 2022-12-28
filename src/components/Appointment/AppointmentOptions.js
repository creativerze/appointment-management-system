import React from 'react';

const AppointmentOptions = ({ appointmentOption, setMeting }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl bg-base-300">
      <div className="card-body text-center">
        <h2 className="text-2xl text-primary font-bold text-center">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
        <div className="card-actions justify-center mt-2">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary"
            onClick={() => setMeting(appointmentOption)}
          >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;