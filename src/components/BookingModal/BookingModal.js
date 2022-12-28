import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ meting, selectedDate, setMeting }) => {
  const { name: metingName, slots } = meting;

  const date = format(selectedDate, 'PP');
  const { user } = useContext(AuthContext);

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    toast.success('Booking Confirmed');
    setMeting(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{metingName}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
            <input type="text" disabled value={date} className="input w-full input-bordered " />
            <select name="slot" className="select select-bordered w-full">
              {
                slots.map((slot, i) => <option
                  value={slot}
                  key={i}
                >{slot}</option>)
              }
            </select>
            <input name="name" required type="text" placeholder="Your Name" className="input w-full input-bordered" />
            <input name="email" defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input w-full input-bordered" />
            <input name="phone" type="number" placeholder="Phone Number" required className="input w-full input-bordered" />
            <br />
            <input className='btn btn-primary w-full' type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;