import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router'
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdMenu,
  IoMdClose,
} from 'react-icons/io'
import { navData } from './NavData'
import { FaLock } from 'react-icons/fa6'
import DarkMode from '../DarkMode/DarkMode'
import { AuthContext } from '../Authentication/AuthContext'
import SearchBox from '../SearchBox/SearchBox'

import { RxCross2 } from 'react-icons/rx'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import User from '../User/User'
import LogoutButton from '../Logout/LogoutButton'
import AddPropertyButton from '../AddPropertyButton/AddPropertyButton'
import { useTranslation } from 'react-i18next'
import CartButton from '../Cart/CartButton'
import Notification from '../Notification/Notification'

const Navbar = () => {
  const { user } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
const { i18n } = useTranslation()
  const currentLang = i18n.language
  const lang = i18n.language?.startsWith('bn') ? 'bn' : 'en'
  return (
    <nav className="bg-white dark:bg-slate-950  shadow-sm dark:shadow-slate-900/50 relative z-50 transition-colors duration-300">
      <div className="flex justify-between items-center  max-w-[1440px] mx-auto gap-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/Logo.png" alt="Logo" className="w-10 h-10" />
          <h1 className="font-bold text-xL md:text-2xl text-slate-800 dark:text-white">
            {currentLang === 'bn' ? 'ড্রিমস এস্টেট' : 'Dreams Estate'}
          </h1>
        </Link>

        {/* Desktop Navigation Links - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-2">
          {navData?.map((item) => (
            <div key={item.id} className="relative group">
              <NavLink
                to={item.path}
                className="dark:text-white px-3 py-2 flex items-center gap-1 font-bold hover:text-emerald-500 transition-colors"
              >
                {item.Name[lang]}
                {item.hasDropdown && (
                  <IoIosArrowDown className="text-xs group-hover:rotate-180 transition-transform duration-300" />
                )}
              </NavLink>

              {/* Desktop Dropdowns */}
              {item.hasDropdown && (
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="ml-4 w-3 h-3 bg-white dark:bg-slate-900 border-t border-l border-slate-100 dark:border-slate-800 rotate-45 absolute -top-1.5 left-0 z-10"></div>
                  <div className="bg-white dark:bg-slate-900 min-w-[240px] shadow-2xl rounded-xl border border-slate-100 dark:border-slate-800 py-2">
                    {item?.subLink?.map((sub) => (
                      <div key={sub.id} className="relative group/nested">
                        <NavLink
                          to={sub.path}
                          className="flex items-center justify-between px-5 py-3 text-sm font-semibold text-slate-900 dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-500 transition-all"
                        >
                          {sub.Name[lang]}
                          {sub.hasNested && (
                            <IoIosArrowForward className="text-xs" />
                          )}
                        </NavLink>
                        {sub.hasNested && (
                          <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 transform translate-x-2 group-hover/nested:translate-x-0">
                            <div className="bg-white dark:bg-slate-900 min-w-[220px] shadow-2xl rounded-xl border border-slate-100 dark:border-slate-800 py-2">
                              {sub?.nestedLink?.map((nested) => (
                                <NavLink
                                  key={nested.id}
                                  to={nested.path}
                                  className="block px-5 py-2.5 text-sm font-medium text-slate-900 dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:text-emerald-500 transition-colors"
                                >
                                  {nested.Name[lang]}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Right Side - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-4">
          <SearchBox />
          <DarkMode />
          <LanguageSelector />
          {user ? (
            <div className="flex gap-1">
              <Notification/>
              <CartButton />
              <AddPropertyButton />
              <User />
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="auth/login"
                className="px-5 py-2 text-white flex items-center font-semibold rounded-lg bg-slate-800 dark:bg-slate-800 hover:bg-slate-700 gap-2 transition-all active:scale-95"
              >
                <FaLock className="w-3 h-3" />
                {currentLang === 'bn' ? 'লগ ইন করুন' : 'Log In'}
              </Link>
              <Link
                to="auth/register"
                className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-emerald-500/40 transition-all active:scale-95 flex items-center gap-2"
              >
                <FaLock className="w-3 h-3" />{' '}
                {currentLang === 'bn' ? 'নিবন্ধন করুন' : 'Register'}
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Header Elements - Visible only on Mobile */}
        <div className="flex lg:hidden items-center gap-3">
          {!user && (
            <Link
              to="auth/register"
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-bold rounded-lg shadow-lg flex items-center gap-2 transition-all active:scale-95"
            >
              {currentLang === 'bn' ? 'নিবন্ধন করুন' : 'Register'}
            </Link>
          )}
          {user && <User />}

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-800 dark:text-white text-2xl"
          >
            {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-slate-950/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        {/* Mobile Sidebar Content */}
        <div
          className={`absolute right-0 top-0 h-full w-full bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full p-2 hover:bg-gray-400"
              >
                <RxCross2 className="w-5 h-5 dark:text-white" />
              </button>
              <LanguageSelector />
              <DarkMode />
            </div>

            <div className="flex flex-col gap-4 overflow-y-auto">
              {navData?.map((item) => (
                <div key={item.id} className="flex flex-col gap-2">
                  <NavLink
                    to={item.path}
                    onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                    className="dark:text-white py-2 flex items-center gap-1 font-bold hover:text-emerald-500 transition-colors"
                  >
                    {item.Name[lang]}
                  </NavLink>

                  {/* মোবাইল ড্রপডাউন লিন্কসমূহ */}
                  {item.hasDropdown && (
                    <div className="pl-4 flex flex-col gap-2 border-l border-slate-100 dark:border-slate-800">
                      {item?.subLink?.map((sub) => (
                        <div key={sub.id} className="flex flex-col gap-1">
                          <NavLink
                            to={sub.path}
                            onClick={() =>
                              !sub.hasNested && setIsMenuOpen(false)
                            }
                            className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-500 py-1"
                          >
                            {sub.Name[lang]}
                          </NavLink>

                          {sub.hasNested && (
                            <div className="pl-4 flex flex-col gap-1 text-xs">
                              {sub?.nestedLink?.map((nested) => (
                                <NavLink
                                  key={nested.id}
                                  to={nested.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 py-1"
                                >
                                  {nested.Name[lang]}
                                </NavLink>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
              <SearchBox />
              <LogoutButton />
            </div>
            <p className="text-[10px] text-slate-400 mt-4 text-center italic">
              {currentLang === 'bn'
                ? '© ২০২৬ ড্রিমস এস্টেট'
                : '© 2026 Dreams Estate'}
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
