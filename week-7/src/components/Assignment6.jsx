import React, { useState, useRef } from 'react'
import '../App.css'
const Assignment6 = () => {
  const [clicked, setClicked] = useState(false)
  const [number, setnumber] = useState('')
  const [val, setval] = useState({ num1: '', num2: '', num3: '', num4: '' })
  const inputRefs = [useRef(), useRef(), useRef(), useRef()]
  const data = [
    { name: 'num1', value: val.num1 },
    { name: 'num2', value: val.num2 },
    { name: 'num3', value: val.num3 },
    { name: 'num4', value: val.num4 },
  ]
  const changeHandle = (e, index) => {
    // let value = e.target.value.split('')[val.length - 1]
    let value = e.target.value.split('')
    setval((prevVal) => ({
      ...prevVal,
      [e.target.name]: value[value.length - 1],
    }))
    // console.log(value)
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus()
    }
  }

  const handleSubmit = () => {
    if (number.length === 10) {
      setClicked(!clicked)
    } else {
      alert('Please enter a valid number having 10 digits')
    }
  }

  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-800'>
      <button
        onClick={handleSubmit}
        className='absolute font-bold text-white underline left-5 top-24'
      >
        Go Back
      </button>
      {!clicked ? (
        <div className='py-20 bg-gray-900 border-white border-[1px]  rounded-xl w-[30%]'>
          <div className='flex flex-col items-center justify-center gap-10'>
            <h2 className='text-4xl font-bold text-white'>Login with OTP</h2>
            <div className='flex flex-col justify-center items-center w-[80%] gap-4 px-6'>
              <input
                type='number'
                value={number}
                className='w-full px-4 py-2 bg-gray-900 border-[1px] border-white text-white'
                placeholder='Enter your mobile number'
                onChange={(e) => setnumber(e.target.value)}
              />
              <button
                onClick={handleSubmit}
                className='text-white border-white border-2 w-[40%] py-2 text-lg rounded-2xl bg-slate-800 hover:bg-slate-600'
              >
                Send Otp
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='py-20 bg-gray-900 border-white border-[1px] rounded-xl w-[30%]'>
          <div className='flex flex-col items-center justify-center gap-10'>
            <h2 className='text-4xl font-bold text-white'>Enter the OTP</h2>
            <div className='flex flex-col justify-center items-center w-[80%] gap-4 px-6'>
              <div className='flex items-center justify-center gap-4'>
                {data.map((elem, index) => {
                  return (
                    <input
                      className='bg-inherit border-[1px] border-white text-white rounded-lg p-2 text-center'
                      key={index + 1}
                      ref={inputRefs[index]}
                      type='number'
                      name={elem.name}
                      id='quantity'
                      onChange={(e) => changeHandle(e, index)}
                      value={elem.value}
                      min='0'
                      max='9'
                    />
                  )
                })}
              </div>
              <button
                onClick={handleSubmit}
                className='text-white border-white border-2 w-[40%] py-2 text-lg rounded-2xl bg-slate-800 hover:bg-slate-600'
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Assignment6
