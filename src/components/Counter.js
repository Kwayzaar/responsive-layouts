import React from 'react'
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>count</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button 
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
      >
        -
      </button>
      <button 
        onClick={() => setCount(0)}
        disabled={count === 0}
      >
        reset
      </button>
    </div>
  )
}

export default Counter;