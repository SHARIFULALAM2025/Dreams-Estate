import React from 'react'
import { Link } from 'react-router'
const ErrorPage404 = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 py-12 overflow-hidden relative">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center">
        {/* Error Image Section */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
          <img
            src="https://i.ibb.co.com/N65s5jrz/Cjdlfsfjapture-removebg-preview.png"
            alt="404 Error"
            className="h-64 md:h-80 lg:h-96 mx-auto object-contain drop-shadow-[0_20px_50px_rgba(16,185,129,0.3)]"
          />
        </div>



        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable. Let's get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-950 font-bold rounded-full hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all active:scale-95"
          >
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all active:scale-95"
          >
            Go Backward
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default ErrorPage404
