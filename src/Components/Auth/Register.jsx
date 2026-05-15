import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEyeSlash,
  FaFacebook,
} from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router'
import { FaEye } from 'react-icons/fa'
import Social from '../Social/Social'
import Facebook from '../Facebook/Facebook'


const Register = () => {
  const [eye, openEye] = useState(false)
  const handelEye = () => {
    openEye(!eye)
  }

 const handelSignup = (data) => {
    console.log(data);

    }

 const {
   register,
   handleSubmit,

   formState: { errors },
 } = useForm()


  const bgImage =
    'https://i.ibb.co.com/9HbJ0Zr5/Gemini-Generated-Image-68bfgl68bfgl68bf.png'

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-8 px-4 md:py-12 lg:py-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Logo Header */}
      <Link to="/" className="flex items-center gap-2 mb-6 sm:mb-8">
        <div className="w-8 h-8 md:w-10 md:h-10">
          <img
            src="/Logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800">
          Dreams Estate
        </h1>
      </Link>

      {/* Form Card - Responsive Widths */}
      <div
        className="bg-white w-full
        max-w-[100%]       /* Mobile */
        sm:max-w-md        /* Tablet (Small) */
        md:max-w-lg        /* Tablet/Laptop */
        lg:max-w-xl        /* Desktop */
        2xl:max-w-2xl      /* Extra Large */
        rounded-xl shadow-2xl p-6 md:p-10 lg:p-12 transition-all duration-300"
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-6 md:mb-8">
          Sign Up! For New Account
        </h2>

        <form
          onSubmit={handleSubmit(handelSignup)}
          className="space-y-4 md:space-y-6"
        >
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                {...register('name', { required: 'the field is required' })}
                type="text"
                placeholder="Enter Name"
                className="w-full bg-slate-50 border border-slate-100 rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                {...register('email', {
                  required: 'the field is required!',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-50 border border-slate-100 rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  {...register('password', {
                    required: 'the field is required!',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                  type={eye ? 'text' : 'password'}
                  className="w-full bg-slate-50 border border-slate-100 rounded-md py-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                <div onClick={handelEye} className="">
                  {eye ? (
                    <FaEye className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer" />
                  ) : (
                    <FaEyeSlash className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer" />
                  )}
                </div>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  {...register('password', {
                    required: 'the field is required!',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                  type={eye ? 'text' : 'password'}
                  className="w-full bg-slate-50 border border-slate-100 rounded-md py-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                <div onClick={handelEye} className="">
                  {eye ? (
                    <FaEye className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer" />
                  ) : (
                    <FaEyeSlash className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-teal-600 border-slate-300 rounded focus:ring-teal-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-slate-500">
              Remember Me
            </label>
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-[#10b981] hover:bg-[#0da371] text-white font-bold py-3 md:py-4 rounded-md transition-colors shadow-lg">
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6 md:my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-slate-400">OR</span>
          </div>
        </div>

        {/* Social Buttons - Stacks on mobile, side-by-side on larger screens */}
        <div className="flex flex-row gap-4 justify-around">
         <Facebook />
          <Social/>
        </div>

        {/* Footer Link */}
        <p className="text-center text-sm text-slate-600 mt-8">
          Don't have an account yet?{' '}
          <Link
            to="/auth/login"
            className="text-teal-500 font-bold cursor-pointer hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
