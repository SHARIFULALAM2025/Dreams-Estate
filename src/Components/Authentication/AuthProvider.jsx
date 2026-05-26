import React, { useEffect, useState } from 'react'

import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'

import { AuthContext } from './AuthContext'
import { auth } from './Firebase.init'

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  console.log(user, )

  const [theme, setTheme] = useState('light')

  const [loading, setLoading] = useState(true)
  // new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //  login user
  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // log out
  const LogOut = () => {
    return signOut(auth)
  }
  //
  // ফেসবুক প্রোভাইডার সেটআপ
  const facebookProvider = new FacebookAuthProvider()

  // ফেসবুক লগইন ফাংশন
  const CreateAccountFacebook = () => {
    setLoading(true)
    return signInWithPopup(auth, facebookProvider)
  }
  //  user  login google
  const provider = new GoogleAuthProvider()
  const CreateAccountGoogle = () => {
    provider.setCustomParameters({
      prompt: 'select_account',
    })

    return signInWithPopup(auth, provider)
  }
  //
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
      console.log(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const AuthInfo = {
    createUser,
    LoginUser,
    LogOut,
    CreateAccountGoogle,
    CreateAccountFacebook,
    user,
    setUser,
    theme,
    setTheme,
    loading,
  }

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
