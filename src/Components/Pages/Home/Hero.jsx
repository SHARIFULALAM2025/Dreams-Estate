import React, { useState, useEffect } from 'react'
import { FaHome, FaKey, FaSearch, FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  // ইমেজের লিস্ট
  const images = [
    'https://i.ibb.co.com/5x5Jpprf/Gemini-Generated-Image-azm0y7azm0y7azm0.png',
    'https://i.ibb.co.com/3mS9F9c1/blog-img-11.jpg',
    'https://i.ibb.co.com/5XHQV4tw/Gemini-Generated-Image-wiw3xdwiw3xdwiw3.png',
    'https://i.ibb.co.com/FkbbNMck/kara-eads-L7-Ew-Hkq1-B2s-unsplash.jpg',
    'https://i.ibb.co.com/XkNwJmGq/lotus-design-n-print-Wgk-A3-CSFrjc-unsplash.jpg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // অটোমেটিক ইমেজ চেঞ্জ করার লজিক
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // ৫০০০ মিলি-সেকেন্ড = ৫ সেকেন্ড

    return () => clearInterval(interval) // মেমরি লিক রোধ করতে ক্লিয়ার ইন্টারভাল
  }, [images.length])

  return (
    <section
      className="relative min-h-[90vh] lg:min-h-[85vh] w-full bg-cover bg-center flex items-center pt-24 pb-12 px-4 sm:px-6 md:px-12 transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      {/* Background Overlay - রিডিবিলিটি বাড়ানোর জন্য */}
      <div className="absolute inset-0 "></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-[1.2] mb-6 drop-shadow-md">
            World's Largest Property Listing site for
            <span className="text-emerald-600"> Rental, Buy & Sell...</span>
          </h1>
          <p className="text-base md:text-lg text-white font-medium max-w-xl  ">
            Properties for buy / rent in in your location. We have more than
            3000+ listings
          </p>
        </div>

        {/* Tab Buttons Section */}
        <div className="flex items-center">
          <button className="flex items-center gap-2 bg-emerald-500 text-white px-5 sm:px-8 py-3.5 rounded-t-xl font-bold transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
            <FaHome size={18} />
            Buy
          </button>
          <button className="flex items-center gap-2 bg-white/90 backdrop-blur-md text-slate-800 px-5 sm:px-8 py-3.5 rounded-t-xl font-bold hover:bg-white transition-all border-b border-transparent active:scale-95">
            <FaKey size={16} />
            Rent
          </button>
        </div>

        {/* Search Bar Filter Section */}
        <div className="bg-white p-5 md:p-8 rounded-b-2xl rounded-tr-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 items-end">
            {/* Keyword Field */}
            <div className="space-y-2">
              <label className="block text-slate-800 font-bold text-xs tracking-widest uppercase">
                Keyword
              </label>
              <div className="relative">
                <select className="w-full bg-slate-50 border border-slate-200 text-slate-600 py-3 px-4 rounded-lg appearance-none focus:ring-2 focus:ring-emerald-500 transition-all cursor-pointer outline-none">
                  <option>Select</option>
                  <option>Bye</option>
                  <option>Sell</option>

                </select>
                <FaChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  size={12}
                />
              </div>
            </div>

            {/* Property Type Field */}
            <div className="space-y-2">
              <label className="block text-slate-800 font-bold text-xs tracking-widest uppercase">
                Property Type
              </label>
              <div className="relative">
                <select className="w-full bg-slate-50 border border-slate-200 text-slate-600 py-3 px-4 rounded-lg appearance-none focus:ring-2 focus:ring-emerald-500 transition-all cursor-pointer outline-none">
                  <option>select</option>
                  <option>Bye Property</option>
                  <option>Rent Property</option>

                </select>
                <FaChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  size={12}
                />
              </div>
            </div>

            {/* Address Field */}
            <div className="space-y-2 sm:col-span-1 lg:col-span-1">
              <label className="block text-slate-800 font-bold text-xs tracking-widest uppercase">
                Address
              </label>
              <input
                type="text"
                placeholder="City, Zip..."
                className="w-full bg-slate-50 border border-slate-200 text-slate-600 py-3 px-4 rounded-lg focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
              />
            </div>

            {/* Min Price Field */}
            <div className="space-y-2">
              <label className="block text-slate-800 font-bold text-xs tracking-widest uppercase">
                Min Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">
                  $
                </span>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-600 py-3 pl-8 pr-4 rounded-lg focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                />
              </div>
            </div>

            {/* Max Price Field */}
            <div className="space-y-2">
              <label className="block text-slate-800 font-bold text-xs tracking-widest uppercase">
                Max Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">
                  $
                </span>
                <input
                  type="number"
                  placeholder="10000"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-600 py-3 pl-8 pr-4 rounded-lg focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="lg:mt-0">
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white h-[52px] rounded-lg transition-all flex items-center justify-center shadow-lg shadow-emerald-500/30 active:scale-95 group">
                <FaSearch
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="ml-2 font-bold lg:hidden">Search Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
