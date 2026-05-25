import React, { useContext, useState } from 'react'
import { Link } from 'react-router'
import { FaUserCircle, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa'
import { AuthContext } from '../Authentication/AuthContext'
import LogoutButton from '../Logout/LogoutButton'

const User = () => {
  const { user, logOut } = useContext(AuthContext)
  const [imgError, setImgError] = useState(false)

  const getInitials = (name) => {
    if (!name) return 'U'

    const parts = name.split(' ')
    if (parts.length > 1) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
    }

    return name[0].toUpperCase()
  }

  const handleLogout = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="relative inline-block group select-none">
      {/* Profile Avatar */}
      <div className="relative h-10 w-10 rounded-full ring-2 ring-slate-200 dark:ring-slate-800 group-hover:ring-emerald-500 transition-all duration-300 overflow-hidden cursor-pointer shadow-sm bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
        {user?.photoURL && !imgError ? (
          <figure className="w-full h-full">
            <img
              referrerPolicy="no-referrer"
              src={user?.photoURL}
              alt={user?.displayName || 'User profile'}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          </figure>
        ) : (
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
            {getInitials(user?.displayName)}
          </span>
        )}

        {/* Online Status Dot */}
        <span className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900"></span>
      </div>

      {/* Dropdown */}
      <div className="absolute right-0 top-12 pt-2 z-50 w-72 opacity-0 invisible translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
        {/* Triangle Pointer */}
        <div className="absolute top-0 right-5 h-4 w-4 rotate-45 bg-white dark:bg-slate-900 border-l border-t border-slate-200 dark:border-slate-800 shadow-sm z-0"></div>

        {/* Dropdown Box */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl backdrop-blur-xl z-10">
          {/* User Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-5 text-white">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-white/40 bg-white/20 flex items-center justify-center shrink-0">
                {user?.photoURL && !imgError ? (
                  <img
                    src={user?.photoURL}
                    alt="profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-bold">
                    {getInitials(user?.displayName)}
                  </span>
                )}
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-lg truncate">
                  {user?.displayName || 'User'}
                </h3>

                <p className="text-sm text-white/80 truncate">
                  {user?.email || 'No email found'}
                </p>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="p-3 space-y-2">
            {/* Profile */}
            <Link
              to="/profile"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-500/10">
                <FaUserCircle className="text-lg text-emerald-500" />
              </div>

              <div>
                <h4 className="font-semibold">My Profile</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  View profile details
                </p>
              </div>
            </Link>

            {/* Dashboard */}
            <Link
              to="/dashboard"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-500/10">
                <FaTachometerAlt className="text-lg text-indigo-500" />
              </div>

              <div>
                <h4 className="font-semibold">Dashboard</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Manage your account
                </p>
              </div>
            </Link>

            {/* Divider */}
            <div className="my-2 border-t border-slate-200 dark:border-slate-800"></div>

            {/* Logout */}
            <div className="rounded-2xl hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-200">
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
