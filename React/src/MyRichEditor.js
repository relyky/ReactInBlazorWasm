import React, { useEffect, useState, useRef } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function MyRichEditor({ dotNetObject, channel, article }) {
  const editorRef = useRef(null);
  const [value, setValue] = useState(article)

  useEffect(() => {
    window.__eventBus.on(channel, channelCallback);
    return () => window.__eventBus.detach(channel, channelCallback);
  }, [])

  return (
    <div className="p-2 my-2" style={{ border: 'solid 2px red', borderRadius: 8 }}>
      <h4>Rich Text Editor with Quill</h4>
      <ReactQuill ref={editorRef} theme="snow" value={value} onChange={setValue} placeholder="請在此編輯文章。" />
    </div>
  )

  function channelCallback(action, payload) {
    console.log('channelCallback', { action, payload })
    if (action === 'takeArticle') {
      const editor = editorRef.current.makeUnprivilegedEditor(editorRef.current.getEditor());
      const content = editor.getHTML();
      dotNetObject.invokeMethodAsync('OnGetArticle', content);
    }
    else if (action === 'setArticle') {
      const { newArticle } = payload
      setValue(newArticle)
    }
  }
}
