import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

export default function MyRichViewer({ article }) {
  return (
    <div className="p-2 my-2" style={{ border: 'solid 2px red', borderRadius: 8 }}>
      <h4>Rich Text Viewer with Quill</h4>
      <ReactQuill theme="bubble" defaultValue={article} readOnly={true} placeholder="沒有文章。" />
    </div>
  )
}
