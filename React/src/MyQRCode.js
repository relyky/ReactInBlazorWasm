import React from 'react'
import { QRCodeSVG } from 'qrcode.react'

export default function MyQRCode({ code }) {

  return (
    <div className="p-2 my-2" style={{ border: 'solid 2px red', borderRadius: 8}}>
      <h5>MyQRCode</h5>
      <h6>{code}</h6>
      <QRCodeSVG value={code} />
    </div>
  )
}
