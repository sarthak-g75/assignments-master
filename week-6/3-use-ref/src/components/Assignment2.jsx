import React, { useState, useRef } from 'react'

export function Assignment2() {
  const [count, setCount] = useState(0)
  const numberOfTimesReRendered = useRef(0)

  const handleReRender = () => {
    setCount(count + 1)
    numberOfTimesReRendered.current += 1
  }

  return (
    <div>
      <p>
        This component has rendered {numberOfTimesReRendered.current} times.
      </p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  )
}
