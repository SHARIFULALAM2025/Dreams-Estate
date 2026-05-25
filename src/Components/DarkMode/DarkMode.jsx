import React, { useContext, useEffect, useState, useRef } from 'react'
import { FaRegMoon, FaCheck } from 'react-icons/fa'
import { MdOutlineLightMode } from 'react-icons/md'
import { AuthContext } from '../Authentication/AuthContext'

const DarkMode = () => {
  const { setTheme, theme } = useContext(AuthContext)

  const [isOpenMobile, setIsOpenMobile] = useState(false)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme') || 'light'
    setTheme(saveTheme)
    document.documentElement.classList.toggle('dark', saveTheme === 'dark')


    const handleOutsideClick = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpenMobile(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [setTheme])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)

    setIsOpenMobile(false)
  }

  return (
    <div ref={mobileMenuRef} className="relative group py-2">

      <button
        onClick={() => setIsOpenMobile(!isOpenMobile)}
        className="px-2.5 py-2.5 rounded-lg text-slate-700 dark:text-white dark:bg-slate-800 bg-gray-100 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all ease-in-out shadow-md active:scale-95 flex items-center justify-center"
      >
        {theme === 'light' ? (
          <MdOutlineLightMode className="w-5 h-5" />
        ) : (
          <FaRegMoon className="w-5 h-5" />
        )}
      </button>

      <div
        className={`absolute right-0 top-full pt-2 transition-all duration-300 transform translate-y-2 z-50
          lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0
          ${isOpenMobile ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible pointer-events-none lg:pointer-events-auto'}
        `}
      >
        {/* অ্যারো টিপ */}
        <div className="mr-4 w-3 h-3 bg-white dark:bg-slate-800 rotate-45 absolute -top-1 right-1 z-10 border-t border-l border-slate-100 dark:border-slate-700"></div>

        <div className="bg-white dark:bg-slate-800 min-w-[140px] shadow-2xl rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden p-1">
          {/* Light Mode Option */}
          <button
            onClick={() => handleThemeChange('light')}
            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-bold rounded-lg transition-colors ${
              theme === 'light'
                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <MdOutlineLightMode /> Light
            </div>
            {theme === 'light' && <FaCheck className="text-[10px]" />}
          </button>

          {/* Dark Mode Option */}
          <button
            onClick={() => handleThemeChange('dark')}
            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-bold rounded-lg transition-colors ${
              theme === 'dark'
                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <FaRegMoon /> Dark
            </div>
            {theme === 'dark' && <FaCheck className="text-[10px]" />}
          </button>
        </div>
      </div>
    </div>
  )
}



export default DarkMode
