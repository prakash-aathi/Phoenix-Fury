import React,{ useState } from 'react'
import { Navigate } from 'react-router-dom'
import { RefreshToken } from '../../../utils/RefreshToken'

const Homepage = () => {
  
  const [redirectCheck, setRedirectCheck] = useState(false)

  const handleLogout = () => { 
    localStorage.removeItem('token')
    RefreshToken()
    setRedirectCheck(true)
  }
  
  if (!localStorage.getItem('token')) { 
    return <Navigate to="/login" />
  }
  
  return (
      <>
      <div>Homepage</div>
      <p>you logged in</p>
      <button data-testid="logout" name='logout' onClick={handleLogout} >logout</button>
      {redirectCheck && <Navigate to="/login" />}
      </>
  )
}

export default Homepage