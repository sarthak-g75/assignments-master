const url = import.meta.env.VITE_API_URL
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { SignUpInput, SignInInput } from '@sarthak78/medium-common'
import { userAtom } from '../store/atoms/UserAtom'
import { useSetRecoilState } from 'recoil'
export const useAuth = () => {
  const setUser = useSetRecoilState(userAtom)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const signup = async (inputs: SignUpInput) => {
    setLoading(true)
    try {
      const { name, email, password } = inputs
      const response = await axios.post(`${url}/api/v1/user/signup`, {
        name,
        email,
        password,
      })
      //   alert(response.data)
      setLoading(false)
      if (response.status === 200) {
        setUser(true)
        localStorage.setItem('token', `Bearer ${response.data.token}`)
        navigate('/')
      } else {
        throw new Error(response.data.message || 'Signup failed') // Handle unexpected non-200 status
      }
      return response.data
    } catch (error: any) {
      setLoading(false)
      throw new Error(
        error.response?.data?.message || 'Failed to sign up' // Forward the error message to `promiseToast`
      )
    }
  }
  const login = async (inputs: SignInInput) => {
    setLoading(true)
    const { email, password } = inputs
    try {
      const response = await axios.post(`${url}/api/v1/user/login`, {
        email,
        password,
      })
      //   alert(response.data)
      if (response.status === 200) {
        setUser(true)
        localStorage.setItem('token', `Bearer ${response.data.token}`)
        navigate('/')
      } else {
        throw new Error(response.data.message || 'Login failed') // Handle non-200 status codes
      }
      return response.data
    } catch (error: any) {
      setLoading(false)
      throw new Error(error.response?.data?.message || 'Failed to login')
    }
  }

  return {
    signup,
    login,
    loading,
  }
}
