import React, { useEffect, useState } from 'react'

import {
  createUserWithEmailAndPassword,
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
  console.log(user)

  const [theme, setTheme] = useState('light')

  const [loading, setLoading] = useState(true)
  // new user
  const createUser = (Email, Password) => {
    return createUserWithEmailAndPassword(auth, Email, Password)
  }
  //  login user
  const LoginUser = (Email, Password) => {
    return signInWithEmailAndPassword(auth, Email, Password)
  }

  // log out
  const LogOut = () => {
    return signOut(auth)
  }
  //  user  login google
  const provider = new GoogleAuthProvider()
  const CreateAccountGoogle = () => {
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
