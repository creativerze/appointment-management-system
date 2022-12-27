import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import img from '../../assets/login.jpg';

const Login = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState('');

  const handleLogin = data => {
    console.log(data);
    setLoginError('');
  };

  return (
    <div className="hero w-full my-10">
      <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className='w-3/4 mx-auto rounded-lg' src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
          <h1 className="text-5xl text-center font-bold text-indigo-600">Login</h1>

          <form onSubmit={handleSubmit(handleLogin)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text-alt">Email</span>
              </label>
              <input {...register("email", { required: 'Email is required' })} type="email" className="input input-bordered w-full max-w-xs" />
              {errors?.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text-alt">Password</span>
              </label>
              <input {...register("password", {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
              })} type="password" className="input input-bordered w-full max-w-xs" />
              {errors?.password && <p className='text-red-600'>{errors.password?.message}</p>}
              <label className="label">
                <span className="label-text-alt">Forget Password?</span>
              </label>
            </div>


            <input className='btn btn-primary w-full' value='Login' type="submit" />
            <div className="">
              {loginError && <p className='text-red-600'>{loginError}</p>}
            </div>
          </form>
          <p className='mt-2'>New to Here? <Link className='text-primary' to='/signup'>Create a new Account</Link></p>
          <div className="divider">OR</div>
          <button className='btn btn-outline btn-primary w-full'>CONTINUE WITH GOOGLE</button>
        </div>
      </div>
    </div>
  );
};

export default Login;