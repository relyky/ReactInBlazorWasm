import React, { useState, forwardRef } from 'react'

export default function MyMiniApp(props) {
  //const [state, setState] = useState(1);

  return (
    <div className="p-2 my-2" style={{ border: 'solid 2px red', borderRadius: 8 }}>
      <h3>MyMiniApp</h3>
      <h4>我用 React 開發出來的</h4>
    </div>
  )
}
