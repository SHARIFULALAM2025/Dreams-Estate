import React from 'react'
import { useNavigate } from 'react-router'

const ErrorPage505 = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 py-12 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10 text-center">
        {/* Error Image Section */}
        <div className="mb-8 relative transform hover:rotate-2 transition-transform duration-500">
          <img
            src="https://i.ibb.co.com/Q71vfVpB/Captufjdfjflfre-removebg-preview.png"
            alt="505 Error"
            className="h-64 md:h-80 lg:h-96 mx-auto object-contain drop-shadow-[0_20px_50px_rgba(225,29,72,0.2)]"
          />
        </div>
        <h1 className="absolute top-32 right-32 -rotate-45 text-6xl md:text-8xl font-black text-rose-500 tracking-tighter">
          5<span className="text-white">0</span>0
        </h1>
        {/* Text Section */}
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            HTTP Version Not Supported
          </h2>

          <p className="text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
            It looks like the server doesn't support the HTTP protocol version
            used in the request. Please try updating your browser or contact us
            if the problem persists.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all active:scale-95"
          >
            Back to Home
          </button>

          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
          >
            Retry Request
          </button>
        </div>
      </div>

     
    </div>
  )
}

export default ErrorPage505
