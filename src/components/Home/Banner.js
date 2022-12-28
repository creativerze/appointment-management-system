import React from 'react';
import img from '../../assets/Appointment.jpg';

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="rounded-lg shadow-2xl lg:w-1/2" alt='' />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className='btn btn-primary'>Getting Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;