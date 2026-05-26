import React, { useContext } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router' // uncomment navigate if you want automatic redirection
import { useForm } from 'react-hook-form'
import { AuthContext } from '../Authentication/AuthContext'

const ForgetPassword = () => {
  const { ResetPassword } = useContext(AuthContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleResetPassword = async (data) => {
    const { email } = data

    try {
      // Typically returns void/undefined on success depending on auth system (e.g., Firebase)
      await ResetPassword(email.trim())

      toast.success('Reset email sent successfully!')

      // Recommended: redirect them back to login page after successful trigger
      navigate('/auth/login')
    } catch (error) {
      console.error(error)
      toast.error(
        error.message || 'Something went wrong. Please check your email.'
      )
    }
  }

  const bgImage =
    'https://i.ibb.co.com/9HbJ0Zr5/Gemini-Generated-Image-68bfgl68bfgl68bf.png'

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-8 px-4 md:py-12 lg:py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Logo Header */}
      <Link to="/" className="flex items-center gap-2 mb-6 sm:mb-8">
        <img src="/Logo.png" alt="Dreams Estate" className="" />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">
          Dreams Estate
        </h1>
      </Link>

      {/* Reset Password Card */}
      <div
        className="bg-white w-full
        max-w-[100%]       /* Mobile */
        sm:max-w-md        /* Tablet */
        md:max-w-lg        /* Laptop */
        lg:max-w-xl        /* Desktop */
        xl:max-w-xl        /* Large Desktop */
        2xl:max-w-2xl      /* Extra Large */
        rounded-xl shadow-2xl p-6 md:p-10 lg:p-12 transition-all"
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-6 md:mb-8">
          Forgot Password!
        </h2>

        <form
          onSubmit={handleSubmit(handleResetPassword)}
          className="space-y-4 md:space-y-6"
        >
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>

            {/* Input wrapper */}
            <div className="relative mb-1">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                {...register('email', {
                  required: 'The email field is required!',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-50 border border-slate-100 rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
            </div>

            {/* Error Message placement fixed */}
            {errors.email && (
              <span className="text-red-500 text-xs block mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#10b981] hover:bg-[#0da371] text-white font-bold py-3 md:py-4 rounded-md transition-colors shadow-lg active:scale-95"
          >
            Reset Password
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

        {/* Footer Link */}
        <p className="text-center text-sm text-slate-600 mt-8">
          Return to{' '}
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

export default ForgetPassword
