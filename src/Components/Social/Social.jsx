import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../Authentication/AuthContext'
import { saveUser } from '../ReusableFunction/SaveUser'

const Social = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { setUser, CreateAccountGoogle } = useContext(AuthContext)

  const googleLogin = async () => {
    try {
      setLoading(true)
      const result = await CreateAccountGoogle()
      const user = result.user

      // ডাটাবেজে ইউজার সেভ করা
      await saveUser({
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      })

      setUser(user)

      Swal.fire({
        title: 'Login Successful',
        icon: 'success',
        timer: 2000, // অটোমেটিক বন্ধ হওয়ার জন্য
        showConfirmButton: false,
      })

      navigate('/', { replace: true }) // replace: true দিলে ব্যাক বাটনে লগইন পেজ আসবে না
    } catch (error) {
      console.error(error)
      Swal.fire({
        title: 'Login Failed',
        icon: 'error',
        text: error.message,
      })
    } finally {
      // এটি ট্রাই বা ক্যাচ—উভয় ক্ষেত্রেই রান হবে
      setLoading(true)
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={googleLogin}
        disabled={loading} // লোডিং অবস্থায় বাটন ডিজেবল রাখা ভালো
        className={`flex-1 flex px-16 items-center justify-center gap-2 border border-slate-200 py-2.5 rounded-md transition ${
          loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-50'
        }`}
      >
        {loading ? (
          <span className="loading loading-spinner loading-sm"></span> // লোডিং স্পিনার (DaisyUI থাকলে)
        ) : (
          <>
            <FcGoogle />
            <span className="text-sm font-medium text-slate-600">Google</span>
          </>
        )}
      </button>
    </div>
  )
}

export default Social
