import React from 'react'

export default function MyBarcode({ code }) {

  return (
    <div className="p-2 my-2" style={{ border: 'solid 2px red', borderRadius: 8}}>
      <h3>MyBarcode</h3>
      <h4>{code}</h4>
    </div>
  )
}
