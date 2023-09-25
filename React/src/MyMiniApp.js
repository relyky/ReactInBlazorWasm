import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'

/**
 * props := {
 *   attrs: {
 *     count: int
 *   },
 *   onChange: event<attrs>
 * }
 */

export default forwardRef(function MyMiniApp(props, ref) {
  const [attrs, setAttrs] = useState(props.attrs);

  useImperativeHandle(ref, () => {
    return {
      updateAttrs: (newAttrs) => {
        console.log('MyMiniApp.updateAttrs =>', { newAttrs });
        setAttrs(newAttrs);
      },
    };
  }, [attrs]);

  useEffect(() => {
    props.onChange(attrs)
  }, [attrs]);

  function handleClick() {
    setAttrs({ ...attrs, count: attrs.count + 1 })
  }

  return (
    <div className="p-2 my-2" style={{ border: 'solid 2px red', borderRadius: 8 }}>
      <p style={{ color: 'red' }}>這裡用 React 開發出來的</p>
      <h3>MyMiniApp ({attrs.count})</h3>
      <button onClick={handleClick}>increase</button>
    </div>
  )
});
