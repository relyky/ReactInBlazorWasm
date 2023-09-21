import React, { useState } from 'react'

export default function MyCounter({ initCount }) {
  const [count, setCount] = useState(initCount || 0);

  return (
    <div style={{ border: 'solid 2px red', borderRadius: 8, padding: 8 }}>
      <h3>我用 React 開發出來的</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
