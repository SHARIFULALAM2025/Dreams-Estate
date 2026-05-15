import React, { useState } from 'react'
import { IoIosSearch, IoIosClose } from 'react-icons/io'

const SearchBox = () => {
  // মোডাল ওপেন/ক্লোজ করার স্টেট
  const [isOpen, setIsOpen] = useState(false)

  const popularProperties = [
    'Beautiful Condo Room',
    'Royal Apartment',
    'Grand Villa House',
    'Grand Mahaka',
    'Lunaria Residence',
    'Stephen Alexander Homes',
  ]

  return (
    <div className="relative">
      {/* ১. সার্চ ট্রিগার বাটন */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-2.5 py-2.5 rounded-lg text-slate-700 dark:text-white dark:bg-slate-500 bg-gray-100 hover:bg-gray-200 transition-all ease-in-out shadow-sm active:scale-95"
      >
        <IoIosSearch className="w-5 h-5" />
      </button>

      {/* ২. সার্চ মোডাল ওভারলে */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-start justify-center pt-20 px-4">
          {/* ব্যাকগ্রাউন্ড ব্লার ওভারলে */}
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* ৩. মোডাল কন্টেন্ট (আপনার ইমেজের ডিজাইনের মতো) */}
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* হেডার */}
            <div className="flex justify-between items-center p-6 pb-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                What Are You Looking for?
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500"
              >
                <IoIosClose size={28} />
              </button>
            </div>

            {/* সার্চ ইনপুট */}
            <div className="px-6 pb-8">
              <div className="relative mb-6">
                <input
                  type="text"
                  autoFocus
                  placeholder="Type a Keyword...."
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl py-4 px-6 pr-12 text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all italic"
                />
                <IoIosSearch
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={22}
                />
              </div>

              {/* পপুলার সাজেশন্স */}
              <div className="space-y-4">
                <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">
                  Popular Properties
                </h3>
                <ul className="space-y-2">
                  {popularProperties.map((item, index) => (
                    <li
                      key={index}
                      className="text-black dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 cursor-pointer transition-colors py-1 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-slate-200 dark:bg-slate-700 group-hover:bg-emerald-400 rounded-full transition-colors"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* বটম ডেকোরেশন লাইন */}
            <div className="h-2 bg-slate-50 dark:bg-slate-800/50"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBox
