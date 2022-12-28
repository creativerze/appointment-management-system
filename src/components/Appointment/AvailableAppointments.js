import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [meting, setMeting] = useState(null);


  useEffect(() => {
    fetch('appointmentOptions.json')
      .then(res => res.json())
      .then(data => setAppointmentOptions(data));
  }, []);

  return (
    <section className='my-10'>
      <p className='text-center text-success font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 mt-10">
        {
          appointmentOptions.map(option => <AppointmentOptions
            key={option._id}
            appointmentOption={option}
            setMeting={setMeting}
          ></AppointmentOptions>)
        }
      </div>

      {
        meting &&
        <BookingModal
          selectedDate={selectedDate}
          meting={meting}
          // refetch={refetch}
          setMeting={setMeting}
        ></BookingModal>
      }

    </section>
  );
};

export default AvailableAppointments;