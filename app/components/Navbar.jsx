'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, googleSignIn, googleSignOut } = UserAuth()
  const [loading, setLoading] = useState(true)

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  const handleGoogleSignOut = async () => {
    try {
      await googleSignOut()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setLoading(false)
    }
    checkAuthentication()
  }, [user])


  return (
    <div className='h-20 w-full border-b-2 flex items-certer justify-between p-2'>
      <ul className='flex' >
        <li className='p-2 cursor-pointer'>
          <Link href='/'>Home</Link>
        </li>
        <li className='p-2 cursor-pointer'>
          <Link href='/profile'>Profile</Link>
        </li>
        <li className='p-2 cursor-pointer'>
          <Link href='/about'>About</Link>
        </li>
      </ul>
      {loading ? null : !user ? (
        <ul className='flex' >
          <li onClick={handleGoogleSignIn} className='p-2 cursor-pointer'>
            Login
          </li>
          <li onClick={handleGoogleSignIn} className='p-2 cursor-pointer'>
            Register
          </li>
        </ul>
      ): (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p className='cursor-pointer' onClick={handleGoogleSignOut}>Sign Out</p>
        </div>
      )}
    </div>
  )
}

export default Navbar