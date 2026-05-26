import React, { useState } from 'react'
import {
  FaEnvelope,
  FaLock,
  FaEyeSlash,

  FaEye,
} from 'react-icons/fa'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import Social from '../Social/Social'
import Facebook from '../Facebook/Facebook'
import { useContext } from 'react'
import { AuthContext } from '../Authentication/AuthContext'
const Login = () => {
  const { LoginUser } = useContext(AuthContext)
  const navigate=useNavigate()
  const [eye, openEye] = useState(false)
  const handelEye = () => {
    openEye(!eye)
  }
 const handelLogin = async (data) => {
   const { email, password } = data

   try {
     const result = await LoginUser(email, password)

     console.log(result.user)

     toast.success('Login Successful!')

     navigate('/')
   } catch (error) {
     console.error(error)

     toast.error(error.message || 'Invalid email or password')
   }
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
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-8 px-4 md:py-12 lg:py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Logo Header - Responsive scaling */}
      <Link to="/" className="flex items-center gap-2 mb-6 sm:mb-8">
        <img src="/Logo.png" alt="" className="" />

        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">
          Dreams Estate
        </h1>
      </Link>

      {/* Login Card - Responsive Widths for all breakpoints */}
      <div
        className="bg-white w-full
        max-w-[100%]        /* Mobile (Default) */
        sm:max-w-md         /* Tablet (640px) */
        md:max-w-lg         /* Laptop (768px) */
        lg:max-w-xl         /* Desktop (1024px) */
        xl:max-w-xl         /* Large Desktop (1280px) */
        2xl:max-w-2xl       /* Extra Large (1536px) */
        rounded-xl shadow-2xl p-6 md:p-10 lg:p-12 transition-all"
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-6 md:mb-8">
          Hey There! Welcome Back
        </h2>

        <form
          onSubmit={handleSubmit(handelLogin)}
          className="space-y-4 md:space-y-6"
        >
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
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-100 rounded-md py-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
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

          {/* Remember Me & Forgot Password - Responsive layout */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
            <Link
              to="/auth/resetPassword"
              className="text-sm text-red-400 hover:underline hover:text-red-500 text-left transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#10b981] hover:bg-[#0da371] text-white font-bold py-3 md:py-4 rounded-md transition-colors shadow-lg active:scale-95"
          >
            Sign In
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

        {/* Social Buttons - Stacks on tiny screens, side-by-side on sm+ */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Facebook />
          <Social />
        </div>

        {/* Footer Link */}
        <p className="text-center text-sm text-slate-600 mt-8">
          Don't have an account yet?{' '}
          <Link
            to="/auth/register"
            className="text-teal-500 font-bold cursor-pointer hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
