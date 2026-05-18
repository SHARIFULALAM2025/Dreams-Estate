import React, { useContext, useState } from 'react'
import { AuthContext } from '../Authentication/AuthContext'

const User = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.photoURL)

  const [imgError, setImgError] = useState(false)


  const getInitials = (name) => {
    if (!name) return 'U'
    const parts = name.split(' ')
    if (parts.length > 1) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
    }
    return name[0].toUpperCase()
  }

  return (
    <div className="relative inline-block select-none">
      <div className="h-9 w-9 rounded-full ring-2 ring-slate-100 dark:ring-slate-800 hover:ring-emerald-500 dark:hover:ring-emerald-400 transition-all duration-300 overflow-hidden cursor-pointer shadow-sm bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
        {user?.photoURL && !imgError ? (
          <figure className="w-full h-full">
            <img
              referrerPolicy="no-referrer"
              src={user?.photoURL}
              alt={user?.name || 'User profile'}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          </figure>
        ) : (
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
            {getInitials(user?.name)}
          </span>
        )}
      </div>

      <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-950"></span>
    </div>
  )
}

export default User
