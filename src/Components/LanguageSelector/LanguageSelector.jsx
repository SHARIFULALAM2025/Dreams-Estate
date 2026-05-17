import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLang = i18n.language || 'en'

  // ল্যাঙ্গুয়েজ চেঞ্জ করার ফাংশন
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsOpen(false) // ভাষা পরিবর্তনের পর ড্রপডাউন বন্ধ হবে
  }

  // ড্রপডাউনের বাইরে ক্লিক করলে যেন ড্রপডাউন বন্ধ হয়ে যায়
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* 🎯 মেইন বাটন */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200 focus:outline-none active:scale-95 shadow-sm"
      >
        {/* গ্লোব / ভাষা আইকন */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 text-emerald-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.856.12-1.685.344-2.47"
          />
        </svg>

        {/* কারেন্ট ল্যাঙ্গুয়েজ টেক্সট */}
        <span>{currentLang === 'bn' ? 'বাংলা' : 'English'}</span>

        {/* ডাউন অ্যারো আইকন */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {/* 🎯 ড্রপডাউন মেনু */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl ring-1 ring-black/5 focus:outline-none overflow-hidden z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="py-1">
            {/* English অপশন */}
            <button
              onClick={() => changeLanguage('en')}
              className={`flex items-center justify-between w-full px-4 py-2.5 text-sm transition-colors duration-150 ${
                currentLang === 'en'
                  ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🇺🇸</span>
                <span>English</span>
              </div>
              {currentLang === 'en' && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              )}
            </button>

            {/* Bangla অপশন */}
            <button
              onClick={() => changeLanguage('bn')}
              className={`flex items-center justify-between w-full px-4 py-2.5 text-sm transition-colors duration-150 ${
                currentLang === 'bn'
                  ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🇧🇩</span>
                <span>বাংলা</span>
              </div>
              {currentLang === 'bn' && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
