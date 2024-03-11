import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const Assignment4 = () => {
  const [wordCount, setwordCount] = useState(0)
  const [paragraph, setparagraph] = useState()
  const para =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, delectus cumque quae laudantium excepturi officiis eveniet, a possimus earum culpa rerum voluptas mollitia. Voluptate harum veniam quas provident ea id incidunt inventore dignissimos. Accusamus voluptas officiis, corporis eos tempora ullam enim explicabo esse dolores ad nihil animi aliquid obcaecati libero?'
  const wordArr = useMemo(() => {
    return para.split(' ')
  }, [])
  const handleSubmit = () => {
    let temp = []
    for (let index = 0; index < wordCount; index++) {
      temp.push(wordArr[Math.floor(Math.random() * wordArr.length)])
    }
    setparagraph(temp.join(' '))
    // console.log(temp.join(' '))
  }
  // console.log(wordArr)
  return (
    <>
      <h1 className='flex items-center justify-center w-full pt-20 pb-5 font-bold'>
        Paragraph Generator
      </h1>
      <div className='flex justify-center w-full gap-2 '>
        <input
          className='border-2 w-[50%] border-black '
          type='number'
          name=''
          id=''
          value={wordCount}
          onChange={(e) => {
            setwordCount(e.target.value)
          }}
        />
        <button
          className='p-2 text-white bg-black border-2 border-black rounded-lg'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className='flex justify-center w-full '>
        <p className='flex items-center justify-center w-[80%] py-4'>
          {paragraph}
        </p>
      </div>
    </>
  )
}

export default Assignment4
