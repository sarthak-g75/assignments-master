import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import Card from './components/Card'
const socialNames = ['linkedIn', 'Instagram', 'Twitter', 'Github']
function App() {
  // const [count, setCount] = useState(0)
  const [state, setstate] = useState({
    name: '',
    description: '',
    interest: [],
    links: [],
  })
  const [isSubmitted, setisSubmitted] = useState(false)
  const [interest, setinterest] = useState('')
  const [link, setlink] = useState({
    socialName: '',
    socialLink: '',
  })
  const addMoreInterest = () => {
    setstate((prevState) => ({
      ...prevState,
      interest: [...prevState.interest, interest],
    }))
    setinterest('')
  }
  const addMoreLink = () => {
    if (link.socialName === 'none' || link.socialLink === '') {
      alert('please fill the social links')
    } else {
      setstate((prevState) => ({
        ...prevState,
        links: [...prevState.links, link],
      }))
      setlink((prevState) => ({
        ...prevState,
        socialLink: '',
      }))
    }
  }
  const changeEvent = (val) => {
    // console.log(val.target.value)
    if (val.target.name === 'interest') {
      setinterest(val.target.value)
    } else if (
      val.target.name === 'socialName' ||
      val.target.name === 'socialLink'
    ) {
      setlink((prevState) => ({
        ...prevState,
        [val.target.name]: val.target.value,
      }))
    }
    // let name = val.target.name
    else {
      setstate((prevState) => ({
        ...prevState,
        [val.target.name]: val.target.value,
      }))
    }

    // console.log(state)
  }
  const submitHandler = (e) => {
    // event.preventDefault()
    e.preventDefault()

    setisSubmitted(true)

    // console.log('hello')
  }
  return (
    <>
      {!isSubmitted ? (
        <div className='flex flex-col items-center justify-center w-screen h-screen gap-20 py-10 bg-[#0e1115]'>
          <h1 className='text-5xl tracking-wider font-bold text-[#ff6633] '>
            Business Card generator
          </h1>
          <form
            className='flex flex-col items-center justify-center gap-5 p-20 rounded-xl bg-slate-100'
            action='submit'
            onSubmit={submitHandler}
          >
            <div className='flex items-center justify-between w-full gap-5 px-3 '>
              <label
                className='font-bold w-max text-nowrap '
                htmlFor=''
              >
                Enter your name:
              </label>
              <input
                className='  px-2 py-[2px] rounded-md w-full'
                type='text'
                onChange={changeEvent}
                name='name'
                placeholder='Name'
              />
            </div>
            <div className='flex items-center justify-between w-full gap-5 px-3 '>
              <label
                className='font-bold w-max text-nowrap'
                htmlFor=''
              >
                Enter Description:
              </label>
              <input
                className='  px-2 py-[2px] rounded-md w-full'
                type='text'
                onChange={changeEvent}
                name='description'
                placeholder='Description'
              />
            </div>
            <div className='flex items-center justify-between w-full gap-5 px-3 '>
              <label
                className='font-bold w-max text-nowrap'
                htmlFor=''
              >
                Enter your interests:
              </label>
              <div className='flex items-center justify-center w-full gap-5'>
                <input
                  className='  px-2 py-[1px] rounded-md w-full '
                  type='text'
                  placeholder='interest'
                  name='interest'
                  value={interest}
                  onChange={changeEvent}
                />
                <button
                  className='p-2 text-sm font-bold border-2 rounded-md w-max bg-slate-50 text-nowrap hover:bg-slate-200'
                  onClick={addMoreInterest}
                  type='button'
                >
                  Add
                </button>
              </div>
            </div>
            {state.interest.length > 0 ? (
              <div className='flex gap-2'>
                Interests:{'  '}
                {state.interest.map((val, i) => {
                  return <label key={i + 1}> {val} , </label>
                })}
              </div>
            ) : (
              <></>
            )}
            <div className='flex items-center justify-between w-full gap-5 px-3 '>
              <label
                className='font-bold w-max text-nowrap'
                htmlFor=''
              >
                Enter your social links:
              </label>
              <div className='flex items-center justify-center w-full gap-2'>
                <select
                  className='rounded-md w-max'
                  name='socialName'
                  onChange={changeEvent}
                >
                  <option value={'none'}>None</option>
                  {socialNames.map((val) => {
                    return (
                      <option
                        value={val}
                        key={val}
                      >
                        {val}
                      </option>
                    )
                  })}
                </select>
                <input
                  type='text'
                  className='  px-2 py-[1px] rounded-md w-full '
                  placeholder='Social Link'
                  name='socialLink'
                  value={link.socialLink}
                  onChange={changeEvent}
                />
                <button
                  className='p-2 text-sm font-bold border-2 rounded-md w-max bg-slate-50 text-nowrap hover:bg-slate-200'
                  type='button'
                  onClick={addMoreLink}
                >
                  Add
                </button>
              </div>
            </div>
            {state.links.length > 0 ? (
              <div className='flex flex-col gap-2'>
                {state.links.map((val, i) => {
                  // console.log(val)
                  return (
                    <div key={i + 1}>
                      <label> {val.socialName}:</label>{' '}
                      <label> {val.socialLink}</label>
                    </div>
                  )
                })}
              </div>
            ) : (
              <></>
            )}
            <button
              type='submit'
              // onSubmit={submitHandler}
              className='p-2 text-sm font-bold border-2 rounded-md w-max bg-slate-50 text-nowrap hover:bg-slate-200'
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <></>
      )}
      {isSubmitted ? <Card details={state} /> : <></>}
    </>
  )
}

export default App
