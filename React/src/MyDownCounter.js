import React, { useEffect, useState } from 'react'

export default function MyDownCounter({ initCount /*, onFinish */ }) {
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

  // count-down timer
  useEffect(() => {
    const intervalId = setInterval(handleDown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="d-flex align-items-center border border-info px-2">
      <div>{count}</div>
      {/*<button onClick={handleDown} className="btn btn-sm">倒數</button>*/}
      <button onClick={handleReset} className="btn btn-sm">重置</button>
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