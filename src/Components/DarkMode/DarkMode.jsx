import React, { useContext, useEffect } from 'react'
import { FaRegMoon, FaCheck } from 'react-icons/fa'
import { MdOutlineLightMode } from 'react-icons/md'
import { AuthContext } from '../Authentication/AuthContext'

const DarkMode = () => {
  const { setTheme, theme } = useContext(AuthContext)

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme') || 'light'
    setTheme(saveTheme)
    document.documentElement.classList.toggle('dark', saveTheme === 'dark')
  }, [setTheme])

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="relative group py-2">
      <button className="px-2.5 py-2.5 rounded-lg text-slate-700 dark:text-white dark:bg-slate-500 bg-gray-100 hover:bg-gray-200 transition-all ease-in-out shadow-md active:scale-95">
        {theme === 'light' ? (
          <MdOutlineLightMode className="w-5 h-5" />
        ) : (
          <FaRegMoon className="w-5 h-5" />
        )}
      </button>

      {/* ড্রপডাউন মেনু (হোভার করলে দৃশ্যমান হবে) */}
      <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
        {/* ছোট অ্যারো (Arrow Tip) */}
        <div className="mr-4 w-3 h-3 bg-white dark:bg-slate-800 rotate-45 absolute -top-1 right-1 z-10 border-t border-l border-slate-100 dark:border-slate-700"></div>

        {/* মেনু বক্স */}
        <div className="bg-white dark:bg-slate-800 min-w-[140px] shadow-2xl rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden p-1">
          {/* Light Mode Option */}
          <button
            onClick={() => handleThemeChange('light')}
            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-bold rounded-lg transition-colors ${
              theme === 'light'
                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10'
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
                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10'
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
