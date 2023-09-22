﻿import React, { useState } from 'react'

export default function MyTitle({ title }) {

  return (
    <div className="p-2 my-2" style={{ border: 'solid 2px red', borderRadius: 8}}>
      <h3>{title}</h3>
      <h4>我用 React 開發出來的</h4>
    </div>
  )
}
