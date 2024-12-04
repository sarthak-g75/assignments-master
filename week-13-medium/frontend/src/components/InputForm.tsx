import { Link } from 'react-router-dom'

interface Field {
  name: string
  type: string
  placeholder: string
  label: string
}
interface PropsType {
  type: string
  loading: boolean
  onChange: (name: string, value: string) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  fields: Field[]
}
const InputForm: React.FC<PropsType> = ({
  loading,
  type,
  onChange,
  fields,
  handleSubmit,
}) => {
  return (
    <section className='flex flex-col items-center justify-center w-full gap-6 px-6 '>
      {/* {JSON.stringify(loading)} */}
      <div className='flex flex-col items-center justify-center gap-2 '>
        <h1 className='text-3xl font-bold lg:text-4xl'>
          {type === 'signin' ? 'Login to your Account' : 'Create an account'}
        </h1>
        <h3>
          {type === 'signin' ? (
            <p className='text-gray-500'>
              Don't have an account?{' '}
              <Link
                className='underline hover:text-gray-800'
                to='/signup'
              >
                Sign Up
              </Link>
            </p>
          ) : (
            <p className='text-gray-500'>
              Already have an account?{' '}
              <Link
                className='underline hover:text-gray-800'
                to='/signin'
              >
                Login
              </Link>
            </p>
          )}
        </h3>
      </div>
      <form
        onSubmit={handleSubmit}
        action='submit'
        className='flex flex-col justify-center w-2/3 gap-4 lg:w-1/3 '
      >
        {fields.map((field) => (
          <div
            key={field.name}
            className='flex flex-col gap-2'
          >
            <label className='text-lg font-semibold'>{field.label}</label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              className='p-2 text-black border border-gray-300 rounded-md'
              onChange={(e) => onChange(field.name, e.target.value)}
            />
          </div>
        ))}
        <button
          type='submit'
          className={`w-full px-4 py-2 text-base font-medium text-white bg-gray-800 border-2 border-black rounded-md text-w hite ${
            !loading &&
            'hover:text-black hover:bg-white hover:border-opacity-80'
          } border-opacity-90  ${loading ? 'cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Submitting' : type === 'signin' ? 'Sign in' : 'Sign up'}
        </button>
      </form>
    </section>
  )
}

export default InputForm
