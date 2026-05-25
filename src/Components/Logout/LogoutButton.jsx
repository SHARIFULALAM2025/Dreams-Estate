import React, { useContext } from 'react'
import { FaLock } from 'react-icons/fa'
import { AuthContext } from '../Authentication/AuthContext'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

const LogoutButton = () => {
  const { LogOut } = useContext(AuthContext)
  const { i18n } = useTranslation()
      const currentLang = i18n.language
  const handelLogout = () => {
    LogOut()
      .then(() => {
        toast.success('Successfully Logged Out')
      })
      .catch((error) => {
        toast.error('Logout Error:', error.message)
      })
  }
  return (
    <div>
      <button
        onClick={handelLogout}
        className="px-5 py-2 w-full text-white flex items-center font-semibold rounded-lg bg-slate-800 dark:bg-slate-600 hover:bg-slate-700 dark:hover:bg-slate-700 gap-2 hover:shadow-lg transition-all active:scale-95"
      >
        <FaLock className="w-3 h-3" />
        {currentLang === 'bn' ? 'লগ আউট' : 'Log Out'}
      </button>
    </div>
  )
}

export default LogoutButton
