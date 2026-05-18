import React from 'react'
import { useContext } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { AuthContext } from '../Authentication/AuthContext'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import { saveUser } from '../ReusableFunction/SaveUser'

const Facebook = () => {
  const { CreateAccountFacebook, setUser } = useContext(AuthContext)
  const navigate = useNavigate()

 const handleFacebookLogin = async () => {
   try {
     const result = await CreateAccountFacebook()
     const user = result.user


     const facebookProvider = user.providerData.find(
       (p) => p.providerId === 'facebook.com'
     )
     const facebookUid = facebookProvider ? facebookProvider.uid : user.uid


     const permanentPhotoURL = `https://graph.facebook.com/${facebookUid}/picture?type=large`


     await saveUser({
       name: user.displayName,
       email: user.email || 'facebook_user',
       photo: permanentPhotoURL, 
     })

     setUser(user)

     Swal.fire({
       title: 'Login Successful',
       icon: 'success',
       timer: 1500,
       showConfirmButton: false,
     })
     navigate('/')
   } catch (error) {
     console.error(error)
     // Swal error handling...
   }
 }

  return (
    <div>
      <button
        onClick={handleFacebookLogin}
        className="flex-1 px-16 flex items-center justify-center gap-2 border border-slate-200 py-2.5 rounded-md hover:bg-slate-50 transition"
      >
        <FaFacebook className="text-blue-600" />
        <span className="text-sm font-medium text-slate-600">Facebook</span>
      </button>
    </div>
  )
}

export default Facebook
