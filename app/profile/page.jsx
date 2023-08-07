'use client'
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import Spinner from '../components/spinner'

function ProfilePage() {
  
  const { user } = UserAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setLoading(false)
    }
    checkAuthentication()
  }, [user])

  return (
    <div className='p-4'>
      {loading ? (<Spinner/>) : user ? (
        <div>
          <p>Welcome, {user.displayName} you are logged in to the profile allowed</p>
        </div>
      ) : (
      <p>you must be logged in to viw this page - protected route </p>
      )}
    </div>
  )
}

export default ProfilePage