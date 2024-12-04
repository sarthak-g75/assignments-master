import { useState } from 'react'
import Quote from '../components/Quote'
import InputForm from '../components/InputForm'
import { SignUpInput } from '@sarthak78/medium-common'
import { useAuth } from '../hooks/useAuth'
import { promiseToast } from '../components/Notification'
const inputData = [
  { name: 'name', type: 'text', placeholder: 'Name', label: 'Name' },
  { name: 'email', type: 'text', placeholder: 'Email', label: 'Email' },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
  },
]
const Signup = () => {
  const { signup, loading } = useAuth()
  const [inputs, setInputs] = useState<SignUpInput>({
    email: '',
    password: '',
    name: '',
  })
  const handleInputChange = (name: string, value: string) => {
    setInputs((prev) => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    promiseToast(
      signup(inputs),
      'Signing up...',
      'Signup Successful!',
      'Failed to sign up. Please try again.'
    )
  }
  return (
    <section className='flex w-full h-[92vh] '>
      <div className='flex flex-col items-center justify-center w-full h-full lg:w-1/2'>
        <InputForm
          loading={loading}
          type='signup'
          onChange={handleInputChange}
          fields={inputData}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className='hidden w-1/2 h-full lg:block'>
        <Quote />
      </div>
    </section>
  )
}

export default Signup
