'use client'
import { AuthContextProvider } from './context/AuthContext'

function LayoutUtilComponent({
  children,
}) {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  )
}

export default LayoutUtilComponent