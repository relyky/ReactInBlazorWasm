import React, { useEffect, useRef } from "react"
import VisNetworkLab1 from './VisNetworkSample/VisNetworkLab1'
import VisNetworkLab2 from './VisNetworkSample/VisNetworkLab2'

export default function MyVisNetwork({ title }) {

  return (
    <div className="p-2 my-2" style={{ border: 'solid 2px red', borderRadius: 8 }}>
      <h3>{title}</h3>
      <VisNetworkLab1 />
      <VisNetworkLab2 />
    </div>
  )
}
