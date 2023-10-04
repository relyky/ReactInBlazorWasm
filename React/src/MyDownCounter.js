import React, { useEffect, useState } from 'react'

export default function MyDownCounter({ initCount /*, onFinish */}) {
  const [count, setCount] = useState(initCount)
  const [f_finish, setFinish] = useState(false)

  useEffect(() => {
    if (!f_finish && count == 0) {
      setFinish(true)
      // onFinish()
      /// 註：r2wc 於 React.v18 版尚無法傳遞 function 的樣子 (囧)。
      /// 只好變改用 event bus 取代
      window.__eventBus.emit('web-down-counter:on-finish');
    }
  }, [count, f_finish])

  return (
    <div className="p-2 my-2" style={{ border: 'solid 2px red', borderRadius: 8 }}>
      <button onClick={handleDown}>倒數</button>
      <button onClick={handleReset}>重置</button>
      <h2>{count}</h2>
    </div>
  )

  function handleDown() {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0)
  }

  function handleReset() {
    setCount(initCount)
    setFinish(false)
  }

}