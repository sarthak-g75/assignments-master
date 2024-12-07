import { Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userAtom } from './store/atoms/UserAtom'
import { ReactElement } from 'react'

export const ProtectedRoute = ({ element }: { element: ReactElement }) => {
  const user = useRecoilValue(userAtom)

  // If user is not authenticated, redirect to Signin page
  return user ? (
    element
  ) : (
    <Navigate
      to='/signin'
      replace
    />
  )
}

export const LoggedInRoute = ({ element }: { element: ReactElement }) => {
  const user = useRecoilValue(userAtom)

  return !user ? (
    element
  ) : (
    <Navigate
      to='/'
      replace
    />
  )
}
