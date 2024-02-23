import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin, FaXTwitter, FaGithub } from 'react-icons/fa6'

const Card = (props) => {
  const { name, interest, description, links } = props.details
  const iconMap = {
    instagram: <FaInstagram size={'30px'} />,
    linkedin: <FaLinkedin size={'30px'} />,
    twitter: <FaXTwitter size={'30px'} />,
    github: <FaGithub size={'30px'} />,
  }
  // console.log(props.details)
  return (
    <>
      <div className='flex items-center flex-col gap-10 justify-center w-screen h-screen px-4 bg-[#0e1115]'>
        <h1 className='text-5xl tracking-wider font-bold text-[#ff6633] '>
          Business Card
        </h1>
        <div className='flex flex-col items-start justify-center gap-4 px-8 py-6 bg-blue-100 rounded-md w-96 h-max'>
          <h1 className='text-xl font-bold'>{name}</h1>
          <p className='text-sm text-slate-600'> {description}</p>
          <h2 className='font-bold'>Interest </h2>
          <div className='flex flex-col justify-center gap-1 px-2'>
            {interest.map((val, i) => {
              return <div key={val}>-{val}</div>
            })}
          </div>
          <div className='flex justify-center gap-2'>
            {links.map((val, i) => {
              const { socialName, socialLink } = val
              const iconComponent = iconMap[socialName.toLowerCase()]

              return (
                <a
                  key={i + 1}
                  href={socialLink}
                  target='_blank'
                  // className='flex items-center p-2 text-white bg-black rounded-md text-nowrap w-max'
                >
                  {iconComponent}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
