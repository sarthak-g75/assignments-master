import { useMemo, useState } from 'react'

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0)
  // Your solution starts here

  function factorial(num) {
    // Base case: if num is 0 or 1, factorial is 1
    if (num === 0 || num === 1) {
      return 1
    }
    // Recursive case: num * factorial of (num - 1)
    else {
      return num * factorial(num - 1)
    }
  }

  const expensiveValue = useMemo(() => {
    return factorial(input)
  }, [input])
  // Your solution ends here

  return (
    <div>
      <input
        type='number'
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  )
}
