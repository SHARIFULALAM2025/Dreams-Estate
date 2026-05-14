import React from 'react'
import { Link, NavLink } from 'react-router'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { navData } from './NavData' // আপনার দেওয়া ডেটা ফাইল
import { FaLock } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-8 bg-white px-10 py-2 shadow-sm relative z-50">
      <div className="flex items-center gap-2">
        <img src="/Logo.png" alt="Logo" className="w-10 h-10" />
        <h1 className="font-bold text-2xl text-slate-800">Dreams Estate</h1>
      </div>
      <div className="flex items-center gap-2">
        {' '}
        {navData.map((item) => (
          <div key={item.id} className="relative group">
            {/* লেভেল ১: Main Link (Home, Listing) */}
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-1 font-bold transition-all py-2 ${
                  isActive
                    ? 'text-emerald-500'
                    : 'text-slate-700 hover:text-emerald-500'
                }`
              }
            >
              {item.Name}
              {item.hasDropdown && (
                <IoIosArrowDown className="text-xs group-hover:rotate-180 transition-transform duration-300" />
              )}
            </NavLink>

            {/* লেভেল ২: First Dropdown (Buy Property, Rent Property) */}
            {item.hasDropdown && (
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {/* Capturdsdfde.JPG এর মতো উপরের ছোট অ্যারো */}
                <div className="ml-4 w-3 h-3 bg-white border-t border-l border-slate-100 rotate-45 absolute -top-1.5 left-0 z-10"></div>

                <div className="bg-white min-w-[240px] shadow-2xl rounded-xl border border-slate-100 py-2">
                  {item.subLink.map((sub) => (
                    <div key={sub.id} className="relative group/nested">
                      <NavLink
                        to={sub.path}
                        className="flex items-center justify-between px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-emerald-50 hover:text-emerald-500 transition-all"
                      >
                        {sub.Name}
                        {sub.hasNested && (
                          <IoIosArrowForward className="text-xs" />
                        )}
                      </NavLink>

                      {/* লেভেল ৩: Nested Dropdown (Grid, List, Sidebar options) */}
                      {sub.hasNested && (
                        <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 transform translate-x-2 group-hover/nested:translate-x-0">
                          <div className="bg-white min-w-[220px] shadow-2xl rounded-xl border border-slate-100 py-2">
                            {sub.nestedLink.map((nested) => (
                              <NavLink
                                key={nested.id}
                                to={nested.path}
                                className="block px-5 py-2.5 text-sm font-medium text-slate-500 hover:bg-emerald-50 hover:text-emerald-500 transition-colors"
                              >
                                {nested.Name}
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
      <div className="flex items-center gap-4">
        <Link
          to="auth/login"
          className="px-6 py-2.5 text-white flex items-center font-semibold rounded-lg bg-slate-800 gap-2 hover:shadow-lg hover:shadow-slate-800/30 hover:-translate-y-0.5 transition-all active:scale-95"
        >
          <FaLock className="w-3 h-3" />
          Login
        </Link>

        <Link
          to="auth/register"
          className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all active:scale-95 flex items-center gap-2"
        >
          <FaLock className="w-3 h-3" />
          Register
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
