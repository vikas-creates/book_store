import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-Toast';


const Login = () => {

  const location = useLocation();
  const navigate=useNavigate()
  const from = location.state?.from?.pathname || "/";
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo={
      email:data.email,
      password:data.password,
    }
   await axios
   .post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        // alert("login successfull")
        toast.success('Login successfull!');
        navigate(from ,{ replace: true });
        window.location.reload();
    }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
  }).catch((err)=>{
      if(err.response){
      console.log(err);
      toast.error("Error: "+ err.response.data.message);}
    });
  }

  return (
    <div>
      <h3 className="font-bold text-lg">Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className='mt-4 space-y-2'>
          <span>Email</span>
          <br />
          <input
            type='email'
            placeholder='Enter your email'
            className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register('email', { required: true })}
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>

        {/* Password */}
        <div className='mt-4 space-y-2'>
          <span>Password</span>
          <br />
          <input
            type='password'
            placeholder='Enter your Password'
            className='w-80 px-3 py-1 border rounded-md outline-none'
            {...register('password', { required: true })}
          />
          {errors.password && <span className="text-red-500">Password is required</span>}
        </div>

        {/* Submit Button */}
        <div className='mt-4'>
          <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const Signup = () => {
  const [showLogin, setShowLogin] = useState(false); // Modal control
  //use for redirection
  const location = useLocation();
  const navigate=useNavigate()
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo={
      fullname: data.fullname,
      email:data.email,
      password:data.password,
    }
   await axios
   .post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        // alert("signup successfull")
        toast.success('Signup successfull!');
        navigate(from ,{ replace: true });
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
  }).catch((err)=>{
      if(err.response){
      console.log(err);
      toast.error("Error: "+ err.response.data.message);}
    });
  }


 // const onSubmit = (data) => console.log(data);

  const openLoginModal = () => {
    setShowLogin(true); // Open the login modal
  };

  const closeLoginModal = () => {
    setShowLogin(false); // Close the login modal
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>

            {/* Name */}
            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder='Enter your Full Name'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register('fullname', { required: true })}
              />
              {errors.fullname && <span className="text-sm text-red-500">Name is required</span>}
            </div>

            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder='Enter your email'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register('email', { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">Email is required</span>}
            </div>

            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder='Enter your Password'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register('password', { required: true })}
              />
              {errors.password && <span className="text-sm text-red-500">Password is required</span>}
            </div>

            {/* Button */}
            <div className='flex justify-around mt-4'>
              <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                SignUp
              </button>
              <p>
                Have an account?{' '}
                <button
                  type="button"
                  className='underline text-blue-500 cursor-pointer'
                  onClick={openLoginModal}
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            {/* Close button for modal */}
            <button
              onClick={closeLoginModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            {/* Login Form */}
            <Login />
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
