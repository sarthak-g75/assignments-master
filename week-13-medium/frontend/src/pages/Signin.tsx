import { useState } from 'react'
import InputForm from '../components/InputForm'
import Quote from '../components/Quote'
import { SignInInput } from '@sarthak78/medium-common'
import { useAuth } from '../hooks/useAuth'
import { promiseToast } from '../components/Notification'
const inputData = [
  {
    name: 'email',
    type: 'text',
    placeholder: 'Enter your email',
    label: 'Email',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'password',
    label: 'Password',
  },
]
const Signin = () => {
  const { login, loading } = useAuth()
  const [inputs, setInputs] = useState<SignInInput>({
    email: '',
    password: '',
  })
  const handleInputChange = (name: string, value: string) => {
    setInputs((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    promiseToast(
      login(inputs),
      'Logging in',
      'Login Successful',
      'Failed to login. Please check your credentials'
    )
  }
  return (
    <section className='flex w-full h-[92vh] '>
      {/* {JSON.stringify(inputs)} */}
      <div className='flex flex-col items-center justify-center w-full h-full lg:w-1/2'>
        <InputForm
          type='signin'
          loading={loading}
          onChange={handleInputChange}
          handleSubmit={handleSubmit}
          fields={inputData}
        />
      </div>
      <div className='hidden w-1/2 h-full lg:block'>
        <Quote />
      </div>
    </section>
  )
}

export default Signin
