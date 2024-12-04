import React from 'react'

const LandingPage: React.FC = () => {
  return (
    <div className='min-h-full bg-gradient-to-r from-red-500 to-blue-500'>
      {/* Hero Section */}
      <section className='h-[84vh] py-32 text-white flex flex-col items-center justify-center '>
        <div className='mx-auto text-center max-w-7xl'>
          <h2 className='text-5xl font-semibold leading-tight text-gray-100'>
            Welcome to MediumClone
          </h2>
          <p className='max-w-xl mx-auto mt-6 text-lg text-gray-100'>
            A space where writers and readers connect, share ideas, and inspire
            each other.
          </p>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
