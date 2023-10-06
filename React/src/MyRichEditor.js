import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function MyRichEditor({ dotNetObject, article }) {
  const [value, setValue] = useState(article)

  //useEffect(() => {
  //  window.__eventBus.on('',)
  //},[])

  return (
    <div className="p-2 my-2" style={{ border: 'solid 2px red', borderRadius: 8 }}>
      <h4>Rich Text Editor with Quill</h4>
      <button onClick={handleGetArticle}>拿取文章</button>
      <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="請在此編輯文章。" />
    </div>
  )

  function handleGetArticle() {
    dotNetObject.invokeMethodAsync('OnGetArticle', value);
  }
}
