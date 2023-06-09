import React from 'react'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import { AuthGuard } from '../../../utils/AuthGuard'
import { RefreshToken } from '../../../utils/RefreshToken'

const AdminHomePage = () => {

    const [redirectCheck, setRedirectCheck] = useState(false)
    const handleLogout = () => { 
        localStorage.removeItem('token')
        // localStorage.removeItem('role')
        RefreshToken()
        setRedirectCheck(true)
    }


  return (
      <AuthGuard>
          <div>AdminHomePage</div>
          <button data-testid="logout" name='logout' onClick={handleLogout} >logout</button>
          {redirectCheck && <Navigate to="/login" />}
      </AuthGuard>
  )
}

export default AdminHomePage